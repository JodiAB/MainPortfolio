import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import "./index.css";
import "./case-study.css";

createRoot(document.getElementById("case-navigation")).render(
  <StrictMode>
    <a className="skip-link" href="#main">Skip to case study</a>
    <Navbar basePath="/" />
  </StrictMode>,
);
createRoot(document.getElementById("case-footer")).render(<Footer />);
