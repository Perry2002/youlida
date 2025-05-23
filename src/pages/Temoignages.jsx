import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Fatoumata B.",
    role: "Bénéficiaire",
    message:
      "Grâce à YOULIDA, mes enfants ont eu accès à des fournitures scolaires. Un immense merci pour leur soutien et leur bienveillance !",
    avatar: "https://via.placeholder.com/100x100?text=F",
  },
  {
    id: 2,
    name: "Julien K.",
    role: "Bénévole",
    message:
      "Participer aux projets éducatifs m'a permis de contribuer activement au développement local. Une expérience enrichissante !",
    avatar: "https://via.placeholder.com/100x100?text=J",
  },
  {
    id: 3,
    name: "Aline D.",
    role: "Partenaire local",
    message:
      "YOULIDA est un acteur de confiance, engagé et transparent. Nos collaborations ont toujours porté leurs fruits.",
    avatar: "https://via.placeholder.com/100x100?text=A",
  },
];

const Temoignages = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "#f7f9fc" }}>
      <div className="container">
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#1e293b" }}>
          Témoignages
        </h2>
        <p className="text-center text-muted mb-5">
          Découvrez comment l’association impacte positivement les vies de ceux qu’elle touche.
        </p>

        <div className="row g-4">
          {testimonials.map((t) => (
            <div className="col-md-4" key={t.id}>
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="rounded-circle mx-auto mb-3"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <p className="text-muted">"{t.message}"</p>
                <h6 className="fw-bold mt-3" style={{ color: "#1e293b" }}>{t.name}</h6>
                <small className="text-secondary">{t.role}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Temoignages;
