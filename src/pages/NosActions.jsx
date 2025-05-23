import React from "react";
import "./NosActions.css"; // Pour styliser si nécessaire

export default function NosActions() {
  return (
    <section className="nos-actions container py-5">
      {/* Titre principal */}
      <h2 className="text-center mb-4">NOS Actions</h2>

      {/* Illustration principale */}
      <div className="mb-4 text-center">
        <img
          src="https://via.placeholder.com/800x300"
          alt="Illustration principale"
          className="img-fluid rounded"
        />
      </div>

      {/* Texte d’introduction */}
      <div className="mb-5">
        <p className="lead text-center">
          Ce texte met en valeur les différentes actions de l'organisation.
        </p>
      </div>

      {/* Section Champ d'actions */}
      <h3 className="mb-4">Champ d’actions</h3>
      <div className="row g-4 mb-3">
        {[...Array(6)].map((_, i) => (
          <div className="col-sm-6 col-md-4" key={i}>
            <div className="card h-100">
              <img
                src={`https://via.placeholder.com/300x200?text=Action+${i + 1}`}
                className="card-img-top"
                alt={`Illustration ${i + 1}`}
              />
              <div className="card-body">
                <p className="card-text">Texte explicatif de l’action {i + 1}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
