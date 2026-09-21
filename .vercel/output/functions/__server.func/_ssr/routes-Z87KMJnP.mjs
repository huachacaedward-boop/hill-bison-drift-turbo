import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Volume2, t as VolumeX } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Z87KMJnP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var FALLING = [
	{
		left: "4%",
		size: 16,
		delay: "0s",
		duration: "13s",
		drift: "28px",
		spin: "210deg",
		color: "petal",
		kind: "petal"
	},
	{
		left: "11%",
		size: 22,
		delay: "1.6s",
		duration: "16s",
		drift: "-36px",
		spin: "-240deg",
		color: "gold",
		kind: "bloom"
	},
	{
		left: "18%",
		size: 14,
		delay: "3.2s",
		duration: "12s",
		drift: "18px",
		spin: "180deg",
		color: "petal",
		kind: "petal"
	},
	{
		left: "26%",
		size: 20,
		delay: "0.8s",
		duration: "15s",
		drift: "-22px",
		spin: "260deg",
		color: "gold",
		kind: "petal"
	},
	{
		left: "33%",
		size: 12,
		delay: "4.1s",
		duration: "11s",
		drift: "40px",
		spin: "-160deg",
		color: "paper",
		kind: "petal"
	},
	{
		left: "41%",
		size: 24,
		delay: "2.2s",
		duration: "17s",
		drift: "-14px",
		spin: "300deg",
		color: "petal",
		kind: "bloom"
	},
	{
		left: "48%",
		size: 15,
		delay: "5s",
		duration: "13.5s",
		drift: "32px",
		spin: "-200deg",
		color: "gold",
		kind: "petal"
	},
	{
		left: "56%",
		size: 18,
		delay: "1.1s",
		duration: "14s",
		drift: "-40px",
		spin: "190deg",
		color: "petal",
		kind: "petal"
	},
	{
		left: "63%",
		size: 13,
		delay: "3.8s",
		duration: "12.5s",
		drift: "16px",
		spin: "-280deg",
		color: "gold",
		kind: "bloom"
	},
	{
		left: "71%",
		size: 21,
		delay: "0.4s",
		duration: "16.5s",
		drift: "-28px",
		spin: "220deg",
		color: "petal",
		kind: "petal"
	},
	{
		left: "78%",
		size: 17,
		delay: "2.9s",
		duration: "13s",
		drift: "24px",
		spin: "-170deg",
		color: "paper",
		kind: "petal"
	},
	{
		left: "86%",
		size: 23,
		delay: "4.6s",
		duration: "15.5s",
		drift: "-18px",
		spin: "250deg",
		color: "gold",
		kind: "bloom"
	},
	{
		left: "93%",
		size: 14,
		delay: "1.9s",
		duration: "12s",
		drift: "22px",
		spin: "-230deg",
		color: "petal",
		kind: "petal"
	},
	{
		left: "8%",
		size: 11,
		delay: "6.4s",
		duration: "14.5s",
		drift: "-12px",
		spin: "140deg",
		color: "gold",
		kind: "petal"
	},
	{
		left: "52%",
		size: 19,
		delay: "7.1s",
		duration: "16s",
		drift: "36px",
		spin: "-310deg",
		color: "petal",
		kind: "bloom"
	},
	{
		left: "97%",
		size: 12,
		delay: "5.5s",
		duration: "11.5s",
		drift: "-30px",
		spin: "200deg",
		color: "gold",
		kind: "petal"
	}
];
var FILLS = {
	petal: "var(--color-petal)",
	gold: "var(--color-gold)",
	paper: "var(--color-paper-deep)"
};
function PetalShape({ kind, fill, size }) {
	if (kind === "bloom") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: size,
		height: size,
		viewBox: "0 0 32 32",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "16",
					cy: "8",
					rx: "4.2",
					ry: "8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "16",
					cy: "8",
					rx: "4.2",
					ry: "8",
					transform: "rotate(72 16 16)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "16",
					cy: "8",
					rx: "4.2",
					ry: "8",
					transform: "rotate(144 16 16)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "16",
					cy: "8",
					rx: "4.2",
					ry: "8",
					transform: "rotate(216 16 16)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "16",
					cy: "8",
					rx: "4.2",
					ry: "8",
					transform: "rotate(288 16 16)"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "16",
			cy: "16",
			r: "3.2",
			fill: "var(--color-ink)",
			opacity: "0.35"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: size,
		height: size * 1.6,
		viewBox: "0 0 20 32",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M10 1C13 6 19 10 19 18c0 7-4 12-9 13C5 30 1 25 1 18 1 10 7 6 10 1Z",
			fill
		})
	});
}
function FallingPetals({ bursts }) {
	const [reduce, setReduce] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReduce(mq.matches);
		const onChange = () => setReduce(mq.matches);
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	}, []);
	if (reduce) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden z-20",
		"aria-hidden": "true",
		children: [FALLING.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "petal absolute top-0",
			style: {
				left: p.left,
				animationDelay: p.delay,
				animationDuration: p.duration,
				["--drift"]: p.drift,
				["--spin"]: p.spin
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PetalShape, {
				kind: p.kind,
				fill: FILLS[p.color],
				size: p.size
			})
		}, i)), bursts.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BurstCluster, {
			x: b.x,
			y: b.y
		}, b.id))]
	});
}
var BURST_DIRS = [
	{
		dx: "-70px",
		dy: "-90px",
		spin: "-160deg"
	},
	{
		dx: "20px",
		dy: "-110px",
		spin: "120deg"
	},
	{
		dx: "80px",
		dy: "-70px",
		spin: "200deg"
	},
	{
		dx: "-90px",
		dy: "-20px",
		spin: "-90deg"
	},
	{
		dx: "95px",
		dy: "10px",
		spin: "80deg"
	},
	{
		dx: "-50px",
		dy: "70px",
		spin: "-200deg"
	},
	{
		dx: "40px",
		dy: "80px",
		spin: "150deg"
	},
	{
		dx: "0px",
		dy: "-60px",
		spin: "40deg"
	}
];
function BurstCluster({ x, y }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: BURST_DIRS.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("burst-petal absolute"),
		style: {
			left: x,
			top: y,
			["--dx"]: d.dx,
			["--dy"]: d.dy,
			["--spin"]: d.spin,
			animationDelay: `${i * 18}ms`
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PetalShape, {
			kind: i % 3 === 0 ? "bloom" : "petal",
			fill: i % 2 === 0 ? FILLS.petal : FILLS.gold,
			size: i % 3 === 0 ? 18 : 12
		})
	}, i)) });
}
var NOTE = {
	D3: 146.83,
	Fs3: 185,
	A3: 220,
	B3: 246.94,
	D4: 293.66,
	E4: 329.63,
	Fs4: 369.99,
	G4: 392,
	A4: 440,
	B4: 493.88,
	Cs5: 554.37,
	D5: 587.33,
	E5: 659.25,
	Fs5: 739.99,
	G5: 783.99,
	A5: 880
};
var MELODY = [
	{
		note: "D5",
		beat: 0,
		dur: .7,
		vel: .22
	},
	{
		note: "Fs5",
		beat: .75,
		dur: .35,
		vel: .16
	},
	{
		note: "A5",
		beat: 1,
		dur: 1.1,
		vel: .24
	},
	{
		note: "G5",
		beat: 2.25,
		dur: .45,
		vel: .16
	},
	{
		note: "Fs5",
		beat: 2.75,
		dur: .45,
		vel: .16
	},
	{
		note: "E5",
		beat: 3.25,
		dur: .9,
		vel: .18
	},
	{
		note: "D5",
		beat: 4.25,
		dur: .7,
		vel: .2
	},
	{
		note: "E5",
		beat: 5,
		dur: .45,
		vel: .14
	},
	{
		note: "Fs5",
		beat: 5.5,
		dur: .9,
		vel: .2
	},
	{
		note: "A4",
		beat: 6.5,
		dur: .7,
		vel: .14
	},
	{
		note: "D5",
		beat: 7.25,
		dur: 1.4,
		vel: .22
	},
	{
		note: "A5",
		beat: 9,
		dur: .7,
		vel: .22
	},
	{
		note: "G5",
		beat: 9.75,
		dur: .45,
		vel: .16
	},
	{
		note: "Fs5",
		beat: 10.25,
		dur: .7,
		vel: .18
	},
	{
		note: "E5",
		beat: 11,
		dur: .7,
		vel: .16
	},
	{
		note: "Fs5",
		beat: 11.75,
		dur: .45,
		vel: .18
	},
	{
		note: "D5",
		beat: 12.25,
		dur: .9,
		vel: .2
	},
	{
		note: "B4",
		beat: 13.25,
		dur: .45,
		vel: .14
	},
	{
		note: "A4",
		beat: 13.75,
		dur: .7,
		vel: .16
	},
	{
		note: "G4",
		beat: 14.5,
		dur: .45,
		vel: .12
	},
	{
		note: "Fs4",
		beat: 15,
		dur: .7,
		vel: .14
	},
	{
		note: "E4",
		beat: 15.75,
		dur: .9,
		vel: .12
	},
	{
		note: "D4",
		beat: 16.75,
		dur: 1.6,
		vel: .18
	}
];
var BASS = [
	{
		note: "D3",
		beat: 0,
		dur: 3.5,
		vel: .08
	},
	{
		note: "G4",
		beat: 4,
		dur: 3.5,
		vel: .05
	},
	{
		note: "A3",
		beat: 8,
		dur: 3.5,
		vel: .07
	},
	{
		note: "D3",
		beat: 12,
		dur: 3.5,
		vel: .08
	},
	{
		note: "A3",
		beat: 16,
		dur: 2.5,
		vel: .06
	}
];
var LOOP_BEATS = 20;
var SECONDS_PER_BEAT = 60 / 72;
var ctx = null;
var master = null;
var filter = null;
var started = false;
var muted = false;
var nextLoopAt = 0;
function bell(destination, audio, freq, time, dur, vel) {
	const osc = audio.createOscillator();
	const partial = audio.createOscillator();
	const gain = audio.createGain();
	osc.type = "sine";
	partial.type = "triangle";
	osc.frequency.setValueAtTime(freq, time);
	partial.frequency.setValueAtTime(freq * 2.002, time);
	gain.gain.setValueAtTime(1e-4, time);
	gain.gain.exponentialRampToValueAtTime(Math.max(vel, .001), time + .018);
	gain.gain.exponentialRampToValueAtTime(1e-4, time + dur);
	osc.connect(gain);
	partial.connect(gain);
	gain.connect(destination);
	osc.start(time);
	partial.start(time);
	osc.stop(time + dur + .05);
	partial.stop(time + dur + .05);
}
function pad(destination, audio, freq, time, dur, vel) {
	const osc = audio.createOscillator();
	const gain = audio.createGain();
	osc.type = "sine";
	osc.frequency.setValueAtTime(freq, time);
	gain.gain.setValueAtTime(1e-4, time);
	gain.gain.exponentialRampToValueAtTime(Math.max(vel, .001), time + .4);
	gain.gain.exponentialRampToValueAtTime(1e-4, time + dur);
	osc.connect(gain);
	gain.connect(destination);
	osc.start(time);
	osc.stop(time + dur + .05);
}
function scheduleLoop(audio, when) {
	if (!filter) return;
	for (const ev of MELODY) {
		const freq = NOTE[ev.note];
		if (!freq) continue;
		bell(filter, audio, freq, when + ev.beat * SECONDS_PER_BEAT, ev.dur * .85, ev.vel ?? .18);
	}
	for (const ev of BASS) {
		const freq = NOTE[ev.note];
		if (!freq) continue;
		pad(filter, audio, freq, when + ev.beat * SECONDS_PER_BEAT, ev.dur * SECONDS_PER_BEAT, ev.vel ?? .06);
	}
}
function armNext() {
	if (!ctx || !started) return;
	const loopLen = LOOP_BEATS * SECONDS_PER_BEAT;
	const delayMs = Math.max(0, (nextLoopAt - ctx.currentTime - .2) * 1e3);
	setTimeout(() => {
		if (!ctx || !started) return;
		scheduleLoop(ctx, nextLoopAt);
		nextLoopAt += loopLen;
		armNext();
	}, delayMs);
}
async function startMusic() {
	if (started) {
		if (ctx?.state === "suspended") await ctx.resume();
		return;
	}
	const audio = new AudioContext();
	const gain = audio.createGain();
	const biquad = audio.createBiquadFilter();
	biquad.type = "lowpass";
	biquad.frequency.value = 2400;
	biquad.Q.value = .7;
	gain.gain.value = muted ? 0 : .55;
	biquad.connect(gain);
	gain.connect(audio.destination);
	if (audio.state === "suspended") await audio.resume();
	ctx = audio;
	master = gain;
	filter = biquad;
	started = true;
	nextLoopAt = audio.currentTime + .08;
	scheduleLoop(audio, nextLoopAt);
	nextLoopAt += LOOP_BEATS * SECONDS_PER_BEAT;
	armNext();
}
function setMusicMuted(next) {
	muted = next;
	if (!master || !ctx) return;
	master.gain.cancelScheduledValues(ctx.currentTime);
	master.gain.setTargetAtTime(next ? 0 : .55, ctx.currentTime, .06);
}
var PAGES = 3;
function YellowCard() {
	const [page, setPage] = (0, import_react.useState)(0);
	const [muted, setMuted] = (0, import_react.useState)(false);
	const [bursts, setBursts] = (0, import_react.useState)([]);
	const [enterKey, setEnterKey] = (0, import_react.useState)(0);
	const go = (0, import_react.useCallback)((next, clientX, clientY) => {
		startMusic();
		const x = clientX ?? window.innerWidth / 2;
		const y = clientY ?? window.innerHeight / 2;
		const id = Date.now() + Math.random();
		setBursts((prev) => [...prev.slice(-4), {
			id,
			x,
			y
		}]);
		window.setTimeout(() => {
			setBursts((prev) => prev.filter((b) => b.id !== id));
		}, 1e3);
		setPage(next);
		setEnterKey((k) => k + 1);
	}, []);
	const advance = (0, import_react.useCallback)((clientX, clientY) => {
		go((page + 1) % PAGES, clientX, clientY);
	}, [go, page]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "ArrowRight" || e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				advance();
			} else if (e.key === "ArrowLeft") {
				e.preventDefault();
				go((page + PAGES - 1) % PAGES);
			} else if (e.key === "m" || e.key === "M") setMuted((m) => !m);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		advance,
		go,
		page
	]);
	(0, import_react.useEffect)(() => {
		setMusicMuted(muted);
	}, [muted]);
	const onPointerUp = (e) => {
		if (e.target.closest("[data-control]")) return;
		advance(e.clientX, e.clientY);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-dvh overflow-hidden bg-ink text-paper select-none cursor-pointer",
		onPointerUp,
		"aria-label": "Tarjeta de flores amarillas para Yulisa. Toca para pasar las hojas.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "sr-only",
				children: "Flores amarillas para Yulisa"
			}),
			page === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverPage, {}, enterKey),
			page === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LetterPage, {}, enterKey),
			page === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BouquetPage, {}, enterKey),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FallingPetals, { bursts }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"data-control": true,
				onPointerUp: (e) => e.stopPropagation(),
				onClick: (e) => {
					e.stopPropagation();
					startMusic();
					setMuted((m) => !m);
				},
				className: cn("absolute top-[max(1rem,env(safe-area-inset-top))] right-[max(1rem,env(safe-area-inset-right))] z-40", "flex size-11 items-center justify-center rounded-full", "bg-paper/85 text-ink shadow-[0_1px_0_rgba(42,34,24,0.08),0_8px_24px_rgba(42,34,24,0.12)]", "backdrop-blur-sm transition-transform duration-150 ease-out", "active:scale-[0.96] hover:bg-paper"),
				"aria-label": muted ? "Activar música" : "Silenciar música",
				children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, {
					className: "size-5",
					strokeWidth: 1.75
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {
					className: "size-5",
					strokeWidth: 1.75
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute bottom-[max(1.25rem,env(safe-area-inset-bottom))] inset-x-0 z-30 flex flex-col items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("hint-pulse font-sans text-xs tracking-[0.22em] uppercase", page === 1 ? "text-ink/70" : "text-paper/90 drop-shadow-[0_1px_8px_rgba(42,34,24,0.55)]"),
					children: page === 2 ? "Toca para volver a empezar" : "Toca en cualquier parte"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex items-center gap-2",
					"aria-label": `Hoja ${page + 1} de ${PAGES}`,
					children: Array.from({ length: PAGES }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { className: cn("h-1.5 rounded-full transition-[width,background-color] duration-300", i === page ? "w-7 bg-petal" : page === 1 ? "w-1.5 bg-ink/25" : "w-1.5 bg-paper/45") }, i))
				})]
			})
		]
	});
}
function CoverPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "page-enter absolute inset-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
				media: "(min-width: 768px)",
				srcSet: "/flowers/field-wide.jpg"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/flowers/field-portrait.jpg",
				alt: "",
				className: "bg-kenburns absolute inset-0 size-full object-cover"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(42,34,24,0.18)_0%,rgba(42,34,24,0.08)_32%,rgba(42,34,24,0.55)_100%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 flex min-h-dvh flex-col justify-end px-6 pb-28 pt-16 sm:px-12 md:justify-center md:pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "stagger-in mx-auto w-full max-w-xl text-center md:text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-[0.7rem] font-medium uppercase tracking-[0.34em] text-petal",
							children: "21 de septiembre"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-display text-lg italic text-paper/85 sm:text-xl",
							children: "Para"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[clamp(3.4rem,12vw,6.5rem)] leading-[0.9] tracking-[-0.03em] text-paper text-balance",
							children: "Yulisa"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-auto mt-6 block h-px w-16 bg-gold md:mx-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-md font-display text-xl leading-snug text-paper/90 text-pretty sm:text-2xl md:mx-0 mx-auto",
							children: "Un ramo de flores amarillas, para que hoy no te falten las tuyas."
						})
					]
				})
			})
		]
	});
}
function LetterPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "page-enter absolute inset-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/flowers/paper.jpg",
				alt: "",
				className: "bg-kenburns absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-paper/55" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 flex min-h-dvh items-center justify-center px-4 py-24 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: cn("relative w-full max-w-[34rem] rounded-[32px] bg-paper/92 px-6 py-9 shadow-[0_1px_0_rgba(42,34,24,0.06),0_24px_60px_rgba(42,34,24,0.16)]", "sm:px-10 sm:py-12"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/flowers/sunflower.jpg",
							alt: "",
							className: "pointer-events-none absolute -top-8 -left-3 size-20 rounded-full object-cover shadow-[0_8px_20px_rgba(42,34,24,0.18)] outline outline-1 -outline-offset-1 outline-ink/10 sm:size-24"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/flowers/rose.jpg",
							alt: "",
							className: "pointer-events-none absolute -bottom-7 -right-2 size-16 rounded-full object-cover shadow-[0_8px_20px_rgba(42,34,24,0.18)] outline outline-1 -outline-offset-1 outline-ink/10 sm:size-20"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "stagger-in text-ink",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-sans text-[0.65rem] font-medium uppercase tracking-[0.32em] text-leaf",
									children: "Para que nadie se quede sin las suyas"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 font-display text-[clamp(1.85rem,6vw,2.75rem)] leading-[1.12] tracking-[-0.02em] text-balance",
									children: "Que nadie se quede sin flores amarillas"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-[1.15rem] leading-[1.55] text-ink/90 text-pretty sm:text-xl",
									children: "Yulisa, este ramo no viene con novela ni promesas imposibles. Viene con sol. Con ganas de que te rías. Con el recordatorio simple de que hay gente que te tiene presente."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 font-display text-[1.15rem] leading-[1.55] text-ink/90 text-pretty sm:text-xl",
									children: "Por cómo eres. Por lo que aportas. Por lo bien que se siente que estés. Hoy no te quedas sin flores amarillas: estas son las tuyas."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 font-display italic text-lg text-leaf text-pretty",
									children: "Que este día te encuentre liviana, con la cabeza en alto y un poco más de luz de la que pediste."
								})
							]
						})
					]
				})
			})
		]
	});
}
function BouquetPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "page-enter absolute inset-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/flowers/bouquet.jpg",
				alt: "",
				className: "bg-kenburns absolute inset-0 size-full object-cover object-[50%_30%]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(42,34,24,0.22)_0%,rgba(42,34,24,0.12)_40%,rgba(42,34,24,0.62)_100%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 flex min-h-dvh flex-col items-center justify-end px-5 pb-28 pt-16 sm:justify-center sm:pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "stagger-in w-full max-w-lg rounded-[28px] bg-paper/90 px-6 py-8 text-center shadow-[0_20px_50px_rgba(42,34,24,0.22)] sm:px-10 sm:py-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/flowers/daisy.jpg",
							alt: "",
							className: "mx-auto size-16 rounded-full object-cover outline outline-1 -outline-offset-1 outline-ink/10 sm:size-20"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-sans text-[0.65rem] font-medium uppercase tracking-[0.32em] text-leaf",
							children: "Estas son las tuyas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-[clamp(2rem,7vw,3.1rem)] leading-[1.05] tracking-[-0.03em] text-ink text-balance",
							children: "Que nunca te falte un ramo de sol"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[1.15rem] leading-[1.55] text-ink/90 text-pretty sm:text-xl",
							children: "Guárdalas un rato. Son de quien te celebra tal como eres, sin pedir nada a cambio: por tu risa, por tu forma de estar, por lo que dejas en los demás."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-display italic text-xl text-ink",
							children: "Feliz día de las flores amarillas, Yulisa."
						})
					]
				})
			})
		]
	});
}
function GoldRule() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "my-5 flex items-center justify-center gap-3",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-gold/80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				width: "14",
				height: "14",
				viewBox: "0 0 32 32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					fill: "var(--color-gold)",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
							cx: "16",
							cy: "8",
							rx: "4",
							ry: "8"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
							cx: "16",
							cy: "8",
							rx: "4",
							ry: "8",
							transform: "rotate(72 16 16)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
							cx: "16",
							cy: "8",
							rx: "4",
							ry: "8",
							transform: "rotate(144 16 16)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
							cx: "16",
							cy: "8",
							rx: "4",
							ry: "8",
							transform: "rotate(216 16 16)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
							cx: "16",
							cy: "8",
							rx: "4",
							ry: "8",
							transform: "rotate(288 16 16)"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "16",
					cy: "16",
					r: "3",
					fill: "var(--color-leaf)"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-gold/80" })
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YellowCard, {});
}
//#endregion
export { Home as component };
