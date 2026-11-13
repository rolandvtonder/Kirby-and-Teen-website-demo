export const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
