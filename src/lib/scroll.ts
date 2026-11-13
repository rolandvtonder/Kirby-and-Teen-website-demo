import Lenis from 'lenis';
import {reducedMotion} from './math';

/**
 * One rAF loop for the whole page. Lenis advances first, then every
 * scroll-driven element reads its own rect and writes styles directly —
 * no framework state, so scrolling never re-renders anything.
 */

type Tick = (time: number) => void;

const subscribers = new Set<Tick>();
let lenis: Lenis | null = null;
let started = false;

export function startScroll() {
  if (started) return;
  started = true;
  if (!reducedMotion()) {
    lenis = new Lenis({lerp: 0.09, smoothWheel: true, wheelMultiplier: 0.9, anchors: true});
  }
  const loop = (time: number) => {
    lenis?.raf(time);
    subscribers.forEach((fn) => fn(time));
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

export function onFrame(fn: Tick): () => void {
  subscribers.add(fn);
  return () => {
    subscribers.delete(fn);
  };
}

/** Freeze page scroll while the menu is open. */
export function lockScroll(locked: boolean) {
  if (lenis) {
    if (locked) lenis.stop();
    else lenis.start();
  } else {
    document.documentElement.style.overflow = locked ? 'hidden' : '';
  }
}
