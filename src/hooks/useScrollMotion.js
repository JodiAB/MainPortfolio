import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollMotion(scope) {
  useEffect(() => {
    const root = scope.current;
    if (!root) return;
    const media = gsap.matchMedia();
    let refreshFrame;
    let disposed = false;

    media.add(
      {
        desktop: "(min-width: 768px)",
        motion: "(prefers-reduced-motion: no-preference)",
      },
      ({ conditions }) => {
        if (!conditions.motion || !conditions.desktop) return;
        const select = gsap.utils.selector(root);
        const distance = conditions.desktop ? 36 : 16;

        // Animate an independent CSS translate so existing hover transforms survive.
        select(".text-heading, .about-grid > article, .skill-group, .project-card, .stage-card, .experience-item, .contact-panel").forEach((element) => {
          gsap.fromTo(
            element,
            { translate: `0px ${element.matches(".text-heading") ? distance / 2 : distance}px` },
            {
              translate: "0px 0px",
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "top 65%",
                scrub: 0.6,
                invalidateOnRefresh: true,
              },
            },
          );
        });

        if (conditions.desktop) {
          gsap.to(select(".hero-landscape"), {
            y: 70,
            ease: "none",
            scrollTrigger: {
              trigger: select("#home")[0],
              start: "top top",
              end: "bottom top",
              scrub: 0.8,
            },
          });
        }
      },
      root,
    );

    // Font loading and expanded experience details can change trigger positions.
    const refresh = () => {
      if (disposed) return;
      cancelAnimationFrame(refreshFrame);
      refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    };
    const observer = new ResizeObserver(refresh);
    observer.observe(root);
    document.fonts?.ready.then(refresh);

    return () => {
      disposed = true;
      observer.disconnect();
      cancelAnimationFrame(refreshFrame);
      media.revert();
    };
  }, [scope]);
}
