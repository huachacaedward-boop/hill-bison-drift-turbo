import { useCallback, useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { FallingPetals, type Burst } from "@/components/falling-petals";
import { startMusic, setMusicMuted } from "@/lib/music-box";
import { cn } from "@/lib/utils";

const PAGES = 3;

export function YellowCard() {
  const [page, setPage] = useState(0);
  const [muted, setMuted] = useState(false);
  const [bursts, setBursts] = useState<Burst[]>([]);
  const [enterKey, setEnterKey] = useState(0);

  const go = useCallback(
    (next: number, clientX?: number, clientY?: number) => {
      void startMusic();
      const x = clientX ?? window.innerWidth / 2;
      const y = clientY ?? window.innerHeight / 2;
      const id = Date.now() + Math.random();
      setBursts((prev) => [...prev.slice(-4), { id, x, y }]);
      window.setTimeout(() => {
        setBursts((prev) => prev.filter((b) => b.id !== id));
      }, 1000);
      setPage(next);
      setEnterKey((k) => k + 1);
    },
    [],
  );

  const advance = useCallback(
    (clientX?: number, clientY?: number) => {
      go((page + 1) % PAGES, clientX, clientY);
    },
    [go, page],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        advance();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go((page + PAGES - 1) % PAGES);
      } else if (e.key === "m" || e.key === "M") {
        setMuted((m) => !m);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [advance, go, page]);

  useEffect(() => {
    setMusicMuted(muted);
  }, [muted]);

  const onPointerUp = (e: React.PointerEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("[data-control]")) return;
    advance(e.clientX, e.clientY);
  };

  return (
    <main
      className="relative min-h-dvh overflow-hidden bg-ink text-paper select-none cursor-pointer"
      onPointerUp={onPointerUp}
      aria-label="Tarjeta de flores amarillas para Yulisa. Toca para pasar las hojas."
    >
      <h1 className="sr-only">Flores amarillas para Yulisa</h1>

      {page === 0 && <CoverPage key={enterKey} />}
      {page === 1 && <LetterPage key={enterKey} />}
      {page === 2 && <BouquetPage key={enterKey} />}

      <FallingPetals bursts={bursts} />

      <button
        type="button"
        data-control
        onPointerUp={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          void startMusic();
          setMuted((m) => !m);
        }}
        className={cn(
          "absolute top-[max(1rem,env(safe-area-inset-top))] right-[max(1rem,env(safe-area-inset-right))] z-40",
          "flex size-11 items-center justify-center rounded-full",
          "bg-paper/85 text-ink shadow-[0_1px_0_rgba(42,34,24,0.08),0_8px_24px_rgba(42,34,24,0.12)]",
          "backdrop-blur-sm transition-transform duration-150 ease-out",
          "active:scale-[0.96] hover:bg-paper",
        )}
        aria-label={muted ? "Activar música" : "Silenciar música"}
      >
        {muted ? <VolumeX className="size-5" strokeWidth={1.75} /> : <Volume2 className="size-5" strokeWidth={1.75} />}
      </button>

      <div className="pointer-events-none absolute bottom-[max(1.25rem,env(safe-area-inset-bottom))] inset-x-0 z-30 flex flex-col items-center gap-3">
        <p
          className={cn(
            "hint-pulse font-sans text-xs tracking-[0.22em] uppercase",
            page === 1
              ? "text-ink/70"
              : "text-paper/90 drop-shadow-[0_1px_8px_rgba(42,34,24,0.55)]",
          )}
        >
          {page === 2 ? "Toca para volver a empezar" : "Toca en cualquier parte"}
        </p>
        <ol className="flex items-center gap-2" aria-label={`Hoja ${page + 1} de ${PAGES}`}>
          {Array.from({ length: PAGES }).map((_, i) => (
            <li
              key={i}
              className={cn(
                "h-1.5 rounded-full transition-[width,background-color] duration-300",
                i === page
                  ? "w-7 bg-petal"
                  : page === 1
                    ? "w-1.5 bg-ink/25"
                    : "w-1.5 bg-paper/45",
              )}
            />
          ))}
        </ol>
      </div>
    </main>
  );
}

function CoverPage() {
  return (
    <section className="page-enter absolute inset-0">
      <picture>
        <source media="(min-width: 768px)" srcSet="/flowers/field-wide.jpg" />
        <img
          src="/flowers/field-portrait.jpg"
          alt=""
          className="bg-kenburns absolute inset-0 size-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(42,34,24,0.18)_0%,rgba(42,34,24,0.08)_32%,rgba(42,34,24,0.55)_100%)]" />
      <div className="relative z-10 flex min-h-dvh flex-col justify-end px-6 pb-28 pt-16 sm:px-12 md:justify-center md:pb-20">
        <div className="stagger-in mx-auto w-full max-w-xl text-center md:text-left">
          <p className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.34em] text-petal">
            21 de septiembre
          </p>
          <p className="mt-5 font-display text-lg italic text-paper/85 sm:text-xl">Para</p>
          <p className="font-display text-[clamp(3.4rem,12vw,6.5rem)] leading-[0.9] tracking-[-0.03em] text-paper text-balance">
            Yulisa
          </p>
          <span className="mx-auto mt-6 block h-px w-16 bg-gold md:mx-0" />
          <p className="mt-6 max-w-md font-display text-xl leading-snug text-paper/90 text-pretty sm:text-2xl md:mx-0 mx-auto">
            Un ramo de flores amarillas, para que hoy no te falten las tuyas.
          </p>
        </div>
      </div>
    </section>
  );
}

function LetterPage() {
  return (
    <section className="page-enter absolute inset-0">
      <img
        src="/flowers/paper.jpg"
        alt=""
        className="bg-kenburns absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-paper/55" />
      <div className="relative z-10 flex min-h-dvh items-center justify-center px-4 py-24 sm:px-8">
        <article
          className={cn(
            "relative w-full max-w-[34rem] rounded-[32px] bg-paper/92 px-6 py-9 shadow-[0_1px_0_rgba(42,34,24,0.06),0_24px_60px_rgba(42,34,24,0.16)]",
            "sm:px-10 sm:py-12",
          )}
        >
          <img
            src="/flowers/sunflower.jpg"
            alt=""
            className="pointer-events-none absolute -top-8 -left-3 size-20 rounded-full object-cover shadow-[0_8px_20px_rgba(42,34,24,0.18)] outline outline-1 -outline-offset-1 outline-ink/10 sm:size-24"
          />
          <img
            src="/flowers/rose.jpg"
            alt=""
            className="pointer-events-none absolute -bottom-7 -right-2 size-16 rounded-full object-cover shadow-[0_8px_20px_rgba(42,34,24,0.18)] outline outline-1 -outline-offset-1 outline-ink/10 sm:size-20"
          />

          <div className="stagger-in text-ink">
            <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.32em] text-leaf">
              Para que nadie se quede sin las suyas
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.85rem,6vw,2.75rem)] leading-[1.12] tracking-[-0.02em] text-balance">
              Que nadie se quede sin flores amarillas
            </h2>
            <GoldRule />
            <p className="font-display text-[1.15rem] leading-[1.55] text-ink/90 text-pretty sm:text-xl">
              Yulisa, este ramo no viene con novela ni promesas imposibles. Viene con sol. Con ganas de que te rías. Con
              el recordatorio simple de que hay gente que te tiene presente.
            </p>
            <p className="mt-4 font-display text-[1.15rem] leading-[1.55] text-ink/90 text-pretty sm:text-xl">
              Por cómo eres. Por lo que aportas. Por lo bien que se siente que estés. Hoy no te quedas sin flores
              amarillas: estas son las tuyas.
            </p>
            <p className="mt-5 font-display italic text-lg text-leaf text-pretty">
              Que este día te encuentre liviana, con la cabeza en alto y un poco más de luz de la que pediste.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

function BouquetPage() {
  return (
    <section className="page-enter absolute inset-0">
      <img
        src="/flowers/bouquet.jpg"
        alt=""
        className="bg-kenburns absolute inset-0 size-full object-cover object-[50%_30%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(42,34,24,0.22)_0%,rgba(42,34,24,0.12)_40%,rgba(42,34,24,0.62)_100%)]" />
      <div className="relative z-10 flex min-h-dvh flex-col items-center justify-end px-5 pb-28 pt-16 sm:justify-center sm:pb-24">
        <div className="stagger-in w-full max-w-lg rounded-[28px] bg-paper/90 px-6 py-8 text-center shadow-[0_20px_50px_rgba(42,34,24,0.22)] sm:px-10 sm:py-10">
          <img
            src="/flowers/daisy.jpg"
            alt=""
            className="mx-auto size-16 rounded-full object-cover outline outline-1 -outline-offset-1 outline-ink/10 sm:size-20"
          />
          <p className="mt-5 font-sans text-[0.65rem] font-medium uppercase tracking-[0.32em] text-leaf">
            Estas son las tuyas
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,7vw,3.1rem)] leading-[1.05] tracking-[-0.03em] text-ink text-balance">
            Que nunca te falte un ramo de sol
          </h2>
          <GoldRule />
          <p className="font-display text-[1.15rem] leading-[1.55] text-ink/90 text-pretty sm:text-xl">
            Guárdalas un rato. Son de quien te celebra tal como eres, sin pedir nada a cambio: por tu risa, por tu forma
            de estar, por lo que dejas en los demás.
          </p>
          <p className="mt-5 font-display italic text-xl text-ink">
            Feliz día de las flores amarillas, Yulisa.
          </p>
        </div>
      </div>
    </section>
  );
}

function GoldRule() {
  return (
    <div className="my-5 flex items-center justify-center gap-3" aria-hidden="true">
      <span className="h-px w-10 bg-gold/80" />
      <svg width="14" height="14" viewBox="0 0 32 32">
        <g fill="var(--color-gold)">
          <ellipse cx="16" cy="8" rx="4" ry="8" />
          <ellipse cx="16" cy="8" rx="4" ry="8" transform="rotate(72 16 16)" />
          <ellipse cx="16" cy="8" rx="4" ry="8" transform="rotate(144 16 16)" />
          <ellipse cx="16" cy="8" rx="4" ry="8" transform="rotate(216 16 16)" />
          <ellipse cx="16" cy="8" rx="4" ry="8" transform="rotate(288 16 16)" />
        </g>
        <circle cx="16" cy="16" r="3" fill="var(--color-leaf)" />
      </svg>
      <span className="h-px w-10 bg-gold/80" />
    </div>
  );
}
