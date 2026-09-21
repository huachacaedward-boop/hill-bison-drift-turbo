const NOTE: Record<string, number> = {
  D3: 146.83,
  Fs3: 185.0,
  A3: 220.0,
  B3: 246.94,
  D4: 293.66,
  E4: 329.63,
  Fs4: 369.99,
  G4: 392.0,
  A4: 440.0,
  B4: 493.88,
  Cs5: 554.37,
  D5: 587.33,
  E5: 659.25,
  Fs5: 739.99,
  G5: 783.99,
  A5: 880.0,
};

type Event = { note: string; beat: number; dur: number; vel?: number };

// Cheerful D-major music-box loop. Folk-sunny, not a love song.
const MELODY: Event[] = [
  { note: "D5", beat: 0, dur: 0.7, vel: 0.22 },
  { note: "Fs5", beat: 0.75, dur: 0.35, vel: 0.16 },
  { note: "A5", beat: 1, dur: 1.1, vel: 0.24 },
  { note: "G5", beat: 2.25, dur: 0.45, vel: 0.16 },
  { note: "Fs5", beat: 2.75, dur: 0.45, vel: 0.16 },
  { note: "E5", beat: 3.25, dur: 0.9, vel: 0.18 },
  { note: "D5", beat: 4.25, dur: 0.7, vel: 0.2 },
  { note: "E5", beat: 5, dur: 0.45, vel: 0.14 },
  { note: "Fs5", beat: 5.5, dur: 0.9, vel: 0.2 },
  { note: "A4", beat: 6.5, dur: 0.7, vel: 0.14 },
  { note: "D5", beat: 7.25, dur: 1.4, vel: 0.22 },

  { note: "A5", beat: 9, dur: 0.7, vel: 0.22 },
  { note: "G5", beat: 9.75, dur: 0.45, vel: 0.16 },
  { note: "Fs5", beat: 10.25, dur: 0.7, vel: 0.18 },
  { note: "E5", beat: 11, dur: 0.7, vel: 0.16 },
  { note: "Fs5", beat: 11.75, dur: 0.45, vel: 0.18 },
  { note: "D5", beat: 12.25, dur: 0.9, vel: 0.2 },
  { note: "B4", beat: 13.25, dur: 0.45, vel: 0.14 },
  { note: "A4", beat: 13.75, dur: 0.7, vel: 0.16 },
  { note: "G4", beat: 14.5, dur: 0.45, vel: 0.12 },
  { note: "Fs4", beat: 15, dur: 0.7, vel: 0.14 },
  { note: "E4", beat: 15.75, dur: 0.9, vel: 0.12 },
  { note: "D4", beat: 16.75, dur: 1.6, vel: 0.18 },
];

const BASS: Event[] = [
  { note: "D3", beat: 0, dur: 3.5, vel: 0.08 },
  { note: "G4", beat: 4, dur: 3.5, vel: 0.05 },
  { note: "A3", beat: 8, dur: 3.5, vel: 0.07 },
  { note: "D3", beat: 12, dur: 3.5, vel: 0.08 },
  { note: "A3", beat: 16, dur: 2.5, vel: 0.06 },
];

const LOOP_BEATS = 20;
const BPM = 72;
const SECONDS_PER_BEAT = 60 / BPM;

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let filter: BiquadFilterNode | null = null;
let started = false;
let muted = false;
let timer: ReturnType<typeof setTimeout> | null = null;
let nextLoopAt = 0;

function bell(
  destination: AudioNode,
  audio: AudioContext,
  freq: number,
  time: number,
  dur: number,
  vel: number,
) {
  const osc = audio.createOscillator();
  const partial = audio.createOscillator();
  const gain = audio.createGain();

  osc.type = "sine";
  partial.type = "triangle";
  osc.frequency.setValueAtTime(freq, time);
  partial.frequency.setValueAtTime(freq * 2.002, time);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(Math.max(vel, 0.001), time + 0.018);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);

  osc.connect(gain);
  partial.connect(gain);
  gain.connect(destination);

  osc.start(time);
  partial.start(time);
  osc.stop(time + dur + 0.05);
  partial.stop(time + dur + 0.05);
}

function pad(
  destination: AudioNode,
  audio: AudioContext,
  freq: number,
  time: number,
  dur: number,
  vel: number,
) {
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, time);
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(Math.max(vel, 0.001), time + 0.4);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);
  osc.connect(gain);
  gain.connect(destination);
  osc.start(time);
  osc.stop(time + dur + 0.05);
}

function scheduleLoop(audio: AudioContext, when: number) {
  if (!filter) return;
  for (const ev of MELODY) {
    const freq = NOTE[ev.note];
    if (!freq) continue;
    bell(filter, audio, freq, when + ev.beat * SECONDS_PER_BEAT, ev.dur * 0.85, ev.vel ?? 0.18);
  }
  for (const ev of BASS) {
    const freq = NOTE[ev.note];
    if (!freq) continue;
    pad(filter, audio, freq, when + ev.beat * SECONDS_PER_BEAT, ev.dur * SECONDS_PER_BEAT, ev.vel ?? 0.06);
  }
}

function armNext() {
  if (!ctx || !started) return;
  const loopLen = LOOP_BEATS * SECONDS_PER_BEAT;
  const lookAhead = 0.2;
  const delayMs = Math.max(0, (nextLoopAt - ctx.currentTime - lookAhead) * 1000);
  timer = setTimeout(() => {
    if (!ctx || !started) return;
    scheduleLoop(ctx, nextLoopAt);
    nextLoopAt += loopLen;
    armNext();
  }, delayMs);
}

export async function startMusic() {
  if (started) {
    if (ctx?.state === "suspended") await ctx.resume();
    return;
  }
  const audio = new AudioContext();
  const gain = audio.createGain();
  const biquad = audio.createBiquadFilter();
  biquad.type = "lowpass";
  biquad.frequency.value = 2400;
  biquad.Q.value = 0.7;
  gain.gain.value = muted ? 0 : 0.55;
  biquad.connect(gain);
  gain.connect(audio.destination);
  if (audio.state === "suspended") await audio.resume();

  ctx = audio;
  master = gain;
  filter = biquad;
  started = true;
  nextLoopAt = audio.currentTime + 0.08;
  scheduleLoop(audio, nextLoopAt);
  nextLoopAt += LOOP_BEATS * SECONDS_PER_BEAT;
  armNext();
}

export function setMusicMuted(next: boolean) {
  muted = next;
  if (!master || !ctx) return;
  master.gain.cancelScheduledValues(ctx.currentTime);
  master.gain.setTargetAtTime(next ? 0 : 0.55, ctx.currentTime, 0.06);
}

export function isMusicStarted() {
  return started;
}
