import React from "react";


export default function Evenements() {
  return (
    <div className="evenements-container">
      <h1 className="evenements-title">Événements</h1>

      {/* À venir */}
      <section className="evenements-section">
        <h2 className="evenements-subtitle">À venir</h2>

        <div className="evenement-card">
          <h3 className="evenement-nom">Forum des Associations</h3>
          <p className="evenement-date">25 mai 2025 — Lyon</p>
          <button className="evenement-btn">S'inscrire</button>
        </div>
      </section>

      {/* Passés */}
      <section className="evenements-section">
        <h2 className="evenements-subtitle">Événements passés</h2>
        <div className="evenement-passes">
          <p>Journée solidaire – Déc. 2024</p>
          <p>Fête de quartier – Sept. 2024</p>
        </div>
      </section>
    </div>
  );
}
