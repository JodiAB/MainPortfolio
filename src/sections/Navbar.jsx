import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Corrected import

function Navigation({ activeSection, setActiveSection }) {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
    }
  };

  return (
    <ul className="nav-ul flex flex-col sm:flex-row sm:gap-6">
      {navItems.map((item) => (
        <li key={item.href} className="nav-li">
          <a
            className={`nav-link block py-2 sm:py-0 transition-colors ${
              activeSection === item.href.replace("#", "")
                ? "text-white font-bold"
                : "text-neutral-400 hover:text-white"
            }`}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for fixed navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const windowTop = scrollPosition - window.scrollY;
          if (windowTop >= top && windowTop < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between py-2">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Jodi
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt=""
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
          </nav>
        </div>
      </div>
      <motion.div
        className="sm:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        {isOpen && (
          <nav className="pb-5 text-center">
            <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
          </nav>
        )}
      </motion.div>
    </div>
  );
};

export default Navbar;
