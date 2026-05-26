import { useEffect } from 'react';

export function useCounters() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = Number(el.dataset.count);
            if (isNaN(target)) return;

            let cur = 0;
            const inc = target / 40;
            const t = setInterval(() => {
              cur = Math.min(cur + inc, target);
              el.textContent = Math.round(cur) + (target > 10 ? '+' : '');
              if (cur >= target) clearInterval(t);
            }, 30);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    const counters = document.querySelectorAll('[data-count]');
    counters.forEach((c) => observer.observe(c));

    return () => {
      counters.forEach((c) => observer.unobserve(c));
      observer.disconnect();
    };
  }, []);
}
