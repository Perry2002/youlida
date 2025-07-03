import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const stats = [
  { id: 1, label: "Membres actifs", value: 120 },
  { id: 2, label: "Projets réalisés", value: 45 },
  { id: 3, label: "Bénévoles engagés", value: 300 },
  { id: 4, label: "Partenaires", value: 15 },
];

const Statistiques = () => {
  return (
    <section className="py-5 text-white" style={{ backgroundColor: "#1e293b" }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Nos Chiffres Clés</h2>
        <div className="row text-center">
          {stats.map((stat) => (
            <div className="col-6 col-md-3 mb-4" key={stat.id}>
              <div className="border border-light rounded p-4 shadow-sm bg-opacity-25 bg-white">
                <h3 className="display-5 fw-bold">{stat.value}+</h3>
                <p className="mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistiques;
