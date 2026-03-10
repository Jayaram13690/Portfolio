import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { personalInfo } from "../data/resumeData";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-text">
            {personalInfo.name}
            <span className="accent-dot">.</span>
          </span>
        </Link>

        <div className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__link ${
                location.pathname === link.path ? "navbar__link--active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href={`mailto:${personalInfo.email}`} className="navbar__cta">
            Hire me
          </a>
        </div>

        <button
          className={`navbar__toggle ${isOpen ? "navbar__toggle--open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
