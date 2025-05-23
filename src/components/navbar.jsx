import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "#1e293b" }}>
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo Youlida" className="me-2" style={{ height: "150px" }} />
          {/* <span className="text-white">YOULIDA</span> */}
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
          <ul className="navbar-nav ms-auto">
            {[
              { path: "/", label: "Accueil" },
              { path: "/AboutPage", label: "Qui Sommes-Nous?" },
              { path: "/NosActions", label: "Nos Actions" },
              { path: "/ContactPage", label: "Contact" },
              // { path: "/Evenements", label: "Événements" },
              { path: "/Adhesion", label: "S'engager" },
              // { path: "/BlogPage", label: "Faire un Don" },
              // { path: "/Temoignages", label: "Témoignages" },
            ].map(({ path, label }) => (
              <li className="nav-item" key={path}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active text-white" : "nav-link text-white"
                  }
                  to={path}
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
