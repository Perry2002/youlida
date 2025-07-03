import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("fr"); // Langue actuelle

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleLang = () => setLang(lang === "fr" ? "en" : "fr");

  // Traductions des liens
  const navLabels = {
    fr: {
      accueil: "Accueil",
      actions: "Nos Actions",
      adhesion: "S'engager",
      contact: "Contact",
    },
    en: {
      accueil: "Home",
      actions: "Our Actions",
      adhesion: "Get Involved",
      contact: "Contact",
    },
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "#1e293b" }}>
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo Youlida" className="me-2" style={{ height: "100px" }} />
        </Link>

        {/* Bouton hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes color="white" /> : <FaBars color="white" />}
        </button>

        {/* Liens */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active text-white" : "nav-link text-white"
                }
                to="/"
                onClick={closeMenu}
              >
                {navLabels[lang].accueil}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active text-white" : "nav-link text-white"
                }
                to="/NosActions"
                onClick={closeMenu}
              >
                {navLabels[lang].actions}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active text-white" : "nav-link text-white"
                }
                to="/Adhesion"
                onClick={closeMenu}
              >
                {navLabels[lang].adhesion}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active text-white" : "nav-link text-white"
                }
                to="/ContactPage"
                onClick={closeMenu}
              >
                {navLabels[lang].contact}
              </NavLink>
            </li>

            {/* Bouton de langue */}
            <li className="nav-item ms-3">
              <button onClick={toggleLang} className="btn btn-outline-light btn-sm">
                {lang === "fr" ? "EN" : "FR"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
