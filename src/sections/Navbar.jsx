import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import SmokyButton from "../components/SmokyButton"



const CV_PATH = "/assets/Jodi-Abrahams-CV.pdf"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
]

function Navigation({ activeSection, setActiveSection, onNavigate }) {
  const handleClick = (event, href) => {
    event.preventDefault()

    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(targetId)
      onNavigate?.()
    }
  }

  return (
    <ul className="nav-ul flex flex-col sm:flex-row sm:items-center sm:gap-6">
      {navItems.map((item) => {
        const sectionId = item.href.replace("#", "")
        const isActive = activeSection === sectionId

        return (
          <li key={item.href} className="nav-li">
            <a
              className={`nav-link block py-2 transition-colors sm:py-0 ${
                isActive
                  ? "font-bold text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
              href={item.href}
              onClick={(event) => handleClick(event, item.href)}
            >
              {item.name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

function DownloadCvButton({ className = "" }) {
  return (
    <SmokyButton
      href={CV_PATH}
      download
      className={className}
      ariaLabel="Download Jodi Abrahams CV"
    >
      Download CV
    </SmokyButton>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace("#", ""))
      const scrollOffset = 120

      for (const section of sections) {
        const element = document.getElementById(section)

        if (!element) continue

        const rect = element.getBoundingClientRect()

        if (rect.top <= scrollOffset && rect.bottom >= scrollOffset) {
          setActiveSection(section)
          break
        }
      }
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-x-0 z-20 w-full border-b border-white/10 bg-primary/40 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between py-2">
          <a
            href="/"
            className="text-xl font-bold text-neutral-400 transition-colors hover:text-white"
          >
            Jodi
          </a>

          <div className="hidden items-center gap-6 sm:flex">
            <nav>
              <Navigation
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
            </nav>

            <DownloadCvButton />
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="h-6 w-6"
              alt=""
            />
          </button>
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
          <nav className="border-t border-white/10 px-4 pb-5 pt-3 text-center">
            <Navigation
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              onNavigate={() => setIsOpen(false)}
            />

            <DownloadCvButton className="mt-4 w-full justify-center" />
          </nav>
        )}
      </motion.div>
    </div>
  )
}

export default Navbar