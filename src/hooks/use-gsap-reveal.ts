import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scanne le DOM dans `scopeRef` et applique des animations selon `data-anim`.
 * Variants supportés :
 *  - "split"    : mots qui montent (mask + opacity)
 *  - "chars"    : lettres une à une (rotation légère)
 *  - "fade-up"  : translate Y + opacity
 *  - "fade"     : opacity
 *  - "reveal-img": image qui se révèle (clip-path + scale)
 *  - "stagger"  : enfants directs animés en cascade
 *
 * Respecte prefers-reduced-motion : sortie immédiate sans animer.
 * Cleanup automatique via gsap.context().
 */
export function useGsapReveal<T extends HTMLElement>(
  scopeRef: RefObject<T>,
  deps: ReadonlyArray<unknown> = [],
) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scope = scopeRef.current;
    if (!scope) return;
    if (reduce) return; // tout reste visible immédiatement

    const ctx = gsap.context(() => {
      // SPLIT — mots qui montent
      scope.querySelectorAll<HTMLElement>('[data-anim="split"]').forEach((el) => {
        if (el.dataset.animApplied) return;
        const text = el.textContent ?? "";
        const words = text.split(/(\s+)/);
        el.textContent = "";
        const spans: HTMLSpanElement[] = [];
        words.forEach((w) => {
          if (/^\s+$/.test(w)) {
            el.appendChild(document.createTextNode(w));
            return;
          }
          const wrap = document.createElement("span");
          wrap.style.display = "inline-block";
          wrap.style.overflow = "hidden";
          wrap.style.verticalAlign = "bottom";
          const inner = document.createElement("span");
          inner.style.display = "inline-block";
          inner.textContent = w;
          wrap.appendChild(inner);
          el.appendChild(wrap);
          spans.push(inner);
        });
        el.dataset.animApplied = "1";
        const delay = parseFloat(el.dataset.delay ?? "0") || 0;
        const stagger = parseFloat(el.dataset.stagger ?? "0.045") || 0.045;
        gsap.fromTo(
          spans,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.05,
            ease: "expo.out",
            stagger,
            delay,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      });

      // CHARS — lettre par lettre
      scope.querySelectorAll<HTMLElement>('[data-anim="chars"]').forEach((el) => {
        if (el.dataset.animApplied) return;
        const walk = (node: Node, out: HTMLElement[]) => {
          if (node.nodeType === Node.TEXT_NODE) {
            const txt = node.textContent ?? "";
            const frag = document.createDocumentFragment();
            for (const ch of txt) {
              if (ch === " ") {
                frag.appendChild(document.createTextNode(" "));
              } else {
                const s = document.createElement("span");
                s.style.display = "inline-block";
                s.textContent = ch;
                frag.appendChild(s);
                out.push(s);
              }
            }
            (node as ChildNode).replaceWith(frag);
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            Array.from(node.childNodes).forEach((c) => walk(c, out));
          }
        };
        const chars: HTMLElement[] = [];
        Array.from(el.childNodes).forEach((c) => walk(c, chars));
        el.dataset.animApplied = "1";
        const delay = parseFloat(el.dataset.delay ?? "0") || 0;
        const stagger = parseFloat(el.dataset.stagger ?? "0.025") || 0.025;

        const tween = gsap.fromTo(
          chars,
          { yPercent: 60, rotate: 6, opacity: 0 },
          {
            yPercent: 0,
            rotate: 0,
            opacity: 1,
            duration: 0.9,
            ease: "expo.out",
            stagger,
            delay,
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          },
        );

        // Fallback de sécurité 2.5s
        window.setTimeout(() => {
          if (chars[0]) {
            const cs = window.getComputedStyle(chars[0]);
            if (parseFloat(cs.opacity) < 0.95) {
              gsap.set(chars, { yPercent: 0, rotate: 0, opacity: 1 });
              tween.kill();
            }
          }
        }, 2500);
      });

      // FADE-UP
      scope.querySelectorAll<HTMLElement>('[data-anim="fade-up"]').forEach((el) => {
        const delay = parseFloat(el.dataset.delay ?? "0") || 0;
        gsap.fromTo(
          el,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "expo.out",
            delay,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      });

      // FADE
      scope.querySelectorAll<HTMLElement>('[data-anim="fade"]').forEach((el) => {
        const delay = parseFloat(el.dataset.delay ?? "0") || 0;
        gsap.fromTo(
          el,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            delay,
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          },
        );
      });

      // REVEAL-IMG
      scope.querySelectorAll<HTMLElement>('[data-anim="reveal-img"]').forEach((el) => {
        gsap.fromTo(
          el,
          {
            scale: 1.18,
            filter: "brightness(0.7)",
            clipPath: "inset(8% 8% 8% 8%)",
          },
          {
            scale: 1,
            filter: "brightness(1)",
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          },
        );
      });

      // STAGGER — enfants directs
      scope.querySelectorAll<HTMLElement>('[data-anim="stagger"]').forEach((el) => {
        const stagger = parseFloat(el.dataset.stagger ?? "0.1") || 0.1;
        const children = Array.from(el.children) as HTMLElement[];
        if (children.length === 0) return;
        gsap.fromTo(
          children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "expo.out",
            stagger,
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          },
        );
      });

      ScrollTrigger.refresh();
    }, scope);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default useGsapReveal;