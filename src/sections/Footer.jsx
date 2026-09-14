import { mySocials } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      <p>Cape Town, South Africa · Open to remote opportunities</p>
      <div className="footer-socials">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            className={social.name === "GitHub" ? "footer-github" : undefined}
            key={index}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
          >
            <img src={social.icon} className="h-5 w-5" alt="" />
            {social.name === "GitHub" && <span>GitHub</span>}
          </a>
        ))}
      </div>
      <p>© {currentYear} Jodi Abrahams. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
