import { useEffect } from "react";

// Offscreen neon effects should not consume rendering time or battery.
export default function useVisibleEffects() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) entry.target.classList.toggle("effect-visible", entry.isIntersecting);
    });
    document.querySelectorAll(".button, .skill-group, .stage-card").forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}
