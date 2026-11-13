import {clamp, reducedMotion} from './math';
import {onFrame} from './scroll';

/**
 * As you scroll past a hero, its stage blurs, dims and shrinks back — a
 * camera pulling away rather than a fade. Also pauses the slideshow once
 * the hero is out of view.
 */
export function bindHeroes() {
  document.querySelectorAll<HTMLElement>('[data-hero]').forEach((root) => {
    if (root.dataset.bound) return;
    root.dataset.bound = '1';
    const stage = root.querySelector<HTMLElement>('[data-stage]');
    const slides = [...root.querySelectorAll<HTMLElement>('.slide')];
    let visible = true;

    if (stage && !reducedMotion()) {
      onFrame(() => {
        const r = root.getBoundingClientRect();
        const h = window.innerHeight;
        const p = clamp(-r.top / h);
        visible = p < 0.98;
        if (p >= 1 && stage.dataset.done) return;
        stage.dataset.done = p >= 1 ? '1' : '';
        stage.style.transform = `translate3d(0, ${(p * h * 0.5).toFixed(1)}px, 0) scale(${(1 - p * 0.08).toFixed(4)})`;
        stage.style.filter = p > 0.01 ? `blur(${(p * 18).toFixed(1)}px) brightness(${(1 - p * 0.5).toFixed(3)})` : 'none';
      });
    }

    if (slides.length > 1 && !reducedMotion()) {
      let i = 0;
      window.setInterval(() => {
        if (!visible || document.hidden) return;
        slides[i].classList.remove('is-active');
        i = (i + 1) % slides.length;
        slides[i].classList.add('is-active');
      }, 6500);
    }
  });
}
