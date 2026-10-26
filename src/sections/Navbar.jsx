import { useEffect, useRef, useState } from "react";
import { CV_PATH, CV_FILENAME } from "../constants/site";
const items = ["Home", "About", "Projects", "Experience", "Contact"];
export default function Navbar({ basePath = "" }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const toggle = useRef(null);
  useEffect(() => {
    if (basePath) return;
    const update = () => {
      let current = "home";
      items.forEach((item) => {
        if (
          document.getElementById(item.toLowerCase())?.getBoundingClientRect()
            .top <= 160
        )
          current = item.toLowerCase();
      });
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [basePath]);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="nav-container">
        <a href={`${basePath}#home`} className="brand" aria-label="Jodi Abrahams home">
          Jodi<span>.</span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle button button-secondary"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}{" "}
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <nav
          id="primary-navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Primary navigation"
        >
          {items.map((item) => (
            <a
              key={item}
              href={`${basePath}#${item.toLowerCase()}`}
              aria-current={
                !basePath && active === item.toLowerCase() ? "location" : undefined
              }
              onClick={() => {
                setOpen(false);
                document
                  .getElementById(item.toLowerCase())
                  ?.focus({ preventScroll: true });
              }}
            >
              {item}
            </a>
          ))}
          <a className="button button-secondary button-neon" href={CV_PATH} download={CV_FILENAME}>
            Download CV ↓
          </a>
        </nav>
      </div>
    </header>
  );
}
