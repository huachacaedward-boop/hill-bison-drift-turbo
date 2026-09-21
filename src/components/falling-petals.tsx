import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type PetalSpec = {
  left: string;
  size: number;
  delay: string;
  duration: string;
  drift: string;
  spin: string;
  color: "petal" | "gold" | "paper";
  kind: "petal" | "bloom";
};

const FALLING: PetalSpec[] = [
  { left: "4%", size: 16, delay: "0s", duration: "13s", drift: "28px", spin: "210deg", color: "petal", kind: "petal" },
  { left: "11%", size: 22, delay: "1.6s", duration: "16s", drift: "-36px", spin: "-240deg", color: "gold", kind: "bloom" },
  { left: "18%", size: 14, delay: "3.2s", duration: "12s", drift: "18px", spin: "180deg", color: "petal", kind: "petal" },
  { left: "26%", size: 20, delay: "0.8s", duration: "15s", drift: "-22px", spin: "260deg", color: "gold", kind: "petal" },
  { left: "33%", size: 12, delay: "4.1s", duration: "11s", drift: "40px", spin: "-160deg", color: "paper", kind: "petal" },
  { left: "41%", size: 24, delay: "2.2s", duration: "17s", drift: "-14px", spin: "300deg", color: "petal", kind: "bloom" },
  { left: "48%", size: 15, delay: "5s", duration: "13.5s", drift: "32px", spin: "-200deg", color: "gold", kind: "petal" },
  { left: "56%", size: 18, delay: "1.1s", duration: "14s", drift: "-40px", spin: "190deg", color: "petal", kind: "petal" },
  { left: "63%", size: 13, delay: "3.8s", duration: "12.5s", drift: "16px", spin: "-280deg", color: "gold", kind: "bloom" },
  { left: "71%", size: 21, delay: "0.4s", duration: "16.5s", drift: "-28px", spin: "220deg", color: "petal", kind: "petal" },
  { left: "78%", size: 17, delay: "2.9s", duration: "13s", drift: "24px", spin: "-170deg", color: "paper", kind: "petal" },
  { left: "86%", size: 23, delay: "4.6s", duration: "15.5s", drift: "-18px", spin: "250deg", color: "gold", kind: "bloom" },
  { left: "93%", size: 14, delay: "1.9s", duration: "12s", drift: "22px", spin: "-230deg", color: "petal", kind: "petal" },
  { left: "8%", size: 11, delay: "6.4s", duration: "14.5s", drift: "-12px", spin: "140deg", color: "gold", kind: "petal" },
  { left: "52%", size: 19, delay: "7.1s", duration: "16s", drift: "36px", spin: "-310deg", color: "petal", kind: "bloom" },
  { left: "97%", size: 12, delay: "5.5s", duration: "11.5s", drift: "-30px", spin: "200deg", color: "gold", kind: "petal" },
];

const FILLS: Record<PetalSpec["color"], string> = {
  petal: "var(--color-petal)",
  gold: "var(--color-gold)",
  paper: "var(--color-paper-deep)",
};

export type Burst = {
  id: number;
  x: number;
  y: number;
};

function PetalShape({
  kind,
  fill,
  size,
}: {
  kind: PetalSpec["kind"];
  fill: string;
  size: number;
}) {
  if (kind === "bloom") {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
        <g fill={fill}>
          <ellipse cx="16" cy="8" rx="4.2" ry="8" />
          <ellipse cx="16" cy="8" rx="4.2" ry="8" transform="rotate(72 16 16)" />
          <ellipse cx="16" cy="8" rx="4.2" ry="8" transform="rotate(144 16 16)" />
          <ellipse cx="16" cy="8" rx="4.2" ry="8" transform="rotate(216 16 16)" />
          <ellipse cx="16" cy="8" rx="4.2" ry="8" transform="rotate(288 16 16)" />
        </g>
        <circle cx="16" cy="16" r="3.2" fill="var(--color-ink)" opacity="0.35" />
      </svg>
    );
  }

  return (
    <svg width={size} height={size * 1.6} viewBox="0 0 20 32" aria-hidden="true">
      <path
        d="M10 1C13 6 19 10 19 18c0 7-4 12-9 13C5 30 1 25 1 18 1 10 7 6 10 1Z"
        fill={fill}
      />
    </svg>
  );
}

export function FallingPetals({ bursts }: { bursts: Burst[] }) {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (reduce) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-20" aria-hidden="true">
      {FALLING.map((p, i) => (
        <span
          key={i}
          className="petal absolute top-0"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            ["--drift" as string]: p.drift,
            ["--spin" as string]: p.spin,
          }}
        >
          <PetalShape kind={p.kind} fill={FILLS[p.color]} size={p.size} />
        </span>
      ))}

      {bursts.map((b) => (
        <BurstCluster key={b.id} x={b.x} y={b.y} />
      ))}
    </div>
  );
}

const BURST_DIRS = [
  { dx: "-70px", dy: "-90px", spin: "-160deg" },
  { dx: "20px", dy: "-110px", spin: "120deg" },
  { dx: "80px", dy: "-70px", spin: "200deg" },
  { dx: "-90px", dy: "-20px", spin: "-90deg" },
  { dx: "95px", dy: "10px", spin: "80deg" },
  { dx: "-50px", dy: "70px", spin: "-200deg" },
  { dx: "40px", dy: "80px", spin: "150deg" },
  { dx: "0px", dy: "-60px", spin: "40deg" },
];

function BurstCluster({ x, y }: { x: number; y: number }) {
  return (
    <>
      {BURST_DIRS.map((d, i) => (
        <span
          key={i}
          className={cn("burst-petal absolute")}
          style={{
            left: x,
            top: y,
            ["--dx" as string]: d.dx,
            ["--dy" as string]: d.dy,
            ["--spin" as string]: d.spin,
            animationDelay: `${i * 18}ms`,
          }}
        >
          <PetalShape
            kind={i % 3 === 0 ? "bloom" : "petal"}
            fill={i % 2 === 0 ? FILLS.petal : FILLS.gold}
            size={i % 3 === 0 ? 18 : 12}
          />
        </span>
      ))}
    </>
  );
}
