"use client";

import { useEffect, useState } from "react";

type Props = {
  target?: number;
  durationMs?: number;
  className?: string;
};

export function HeroCountUp({ target = 35, durationMs = 1500, className }: Props) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    let start: number | null = null;
    let frame = 0;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / durationMs, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, durationMs]);

  return (
    <span className={className} aria-label={`+${target} projetos`}>
      +{value}
    </span>
  );
}
