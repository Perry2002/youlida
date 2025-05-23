import React from "react";

export default function Actions() {
  return (
    <div className="actions-container">
      <h1 className="actions-title">Nos actions & projets</h1>

      {/* Projets passés et en cours */}
      <section className="actions-section">
        <h2 className="actions-subtitle">Projets réalisés et en cours</h2>
        <p>
          Depuis notre création, nous avons mis en œuvre plus de 100 projets :
          ateliers éducatifs, événements culturels, distributions solidaires...
          Actuellement, nous développons un programme d’accompagnement scolaire dans 3 quartiers.
        </p>
      </section>

      {/* Bénéficiaires */}
      <section className="actions-section">
        <h2 className="actions-subtitle">Nos bénéficiaires</h2>
        <p>
          Nos actions soutiennent principalement les enfants et les jeunes issus de milieux modestes, mais aussi
          des familles, des femmes en difficulté et des personnes âgées.
        </p>
      </section>

      {/* Galerie */}
      <section className="actions-section">
        <h2 className="actions-subtitle">Galerie photo & vidéo</h2>
        <p className="actions-gallery-text">
          Un aperçu en images de nos événements marquants et de l’impact de nos projets.
          (Une vraie galerie sera ajoutée bientôt)
        </p>
        <div className="actions-gallery">
          <div className="gallery-item" />
          <div className="gallery-item" />
          <div className="gallery-item" />
        </div>
      </section>
    </div>
  );
}
