import React from "react";

export default function AboutPage() {
  return (
    <div className="about-container">
      <h1 className="about-title">À propos de nous</h1>

      {/* Historique */}
      <section className="about-section">
        <h2 className="about-subtitle">Historique</h2>
        <p>
          Fondée en 2015, Youlida œuvre pour le développement social des jeunes
          à travers des projets éducatifs et culturels.
        </p>
      </section>

      {/* Mission */}
      <section className="about-section">
        <h2 className="about-subtitle">Notre mission</h2>
        <p>
          Encourager l'inclusion sociale, l'accès à l'éducation et l'engagement
          des jeunes par des actions concrètes.
        </p>
      </section>

      {/* Équipe */}
      <section className="about-section">
        <h2 className="about-subtitle">L'équipe</h2>
        <ul className="about-list">
          <li>
            <strong>Jean Dupont</strong> – Président
          </li>
          <li>
            <strong>Marie Curie</strong> – Secrétaire
          </li>
          <li>
            <strong>Ahmed Ben</strong> – Trésorier
          </li>
        </ul>
      </section>
    </div>
  );
}
