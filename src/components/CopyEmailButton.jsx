import { CV_PATH, CV_FILENAME } from "../constants/site";
import { useState } from "react";
import { AnimatePresence, motion as Motion } from "motion/react";

const ContactButtons = () => {
  const [copied, setCopied] = useState(false);
  const email = "jodiabrahams9@gmail.com";
  const cvFile = CV_PATH;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = CV_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Copy Email Button */}
      <Motion.button
        onClick={copyToClipboard}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 1.05 }}
        className="btn hover-animation"
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <Motion.p
              className="flex items-center justify-center gap-2"
              key="copied"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              <img src="assets/copy-done.svg" className="w-5" alt="copy Icon" />
              Email has Copied
            </Motion.p>
          ) : (
            <Motion.p
              className="flex items-center justify-center gap-2"
              key="copy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <img src="assets/copy.svg" className="w-5" alt="copy icon" />
              Copy Email Address
            </Motion.p>
          )}
        </AnimatePresence>
      </Motion.button>

      {/* "or" Text */}
      <p className="text-neutral-400 text-sm font-extralight">or</p>

      {/* Download CV Button */}
      <Motion.button
        onClick={downloadCV}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 1.05 }}
        className="btn hover-animation"
      >
        <Motion.p
          className="flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          <img src="assets/download.svg" className="w-5" alt="copy icon" />
          Download CV
        </Motion.p>
      </Motion.button>
    </div>
  );
};

export default ContactButtons;
