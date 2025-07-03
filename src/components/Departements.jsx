import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const fakeDepartements = [
  { 
    id: 1, 
    title: "Département communication", 
    description: "Au cœur de YOULIDA, le Département Communication assure la diffusion de notre vision, la mise en valeur de nos actions et le renforcement de notre image. Il est chargé de créer des contenus engageants, de gérer notre présence sur les différents canaux (réseaux sociaux, médias, site web) et de favoriser le lien entre l'association, les jeunes et nos partenaires.\n\n Que ce soit à travers les réseaux sociaux, les campagnes de sensibilisation, les relations médias ou la production de contenus, notre mission est de connecter, informer et mobiliser autour de notre vision. Nous faisons de la communication un véritable levier de changement."
  },
  { 
    id: 2, 
    title: "Département de Gestion des Ressources Humaines ", 
    description: "Le Département des Ressources Humaines est au service de l’humain, cœur battant de YOULIDA. Il veille à la gestion, au développement et à l’épanouissement des talents qui composent notre organisation.\n\nRecrutement, intégration, accompagnement, formation et suivi des membres et volontaires, il crée un environnement inclusif, motivant et propice à la croissance personnelle et collective. Nous croyons que des équipes engagées et valorisées sont la clé d’un impact durable parce que prendre soin des personnes, c’est renforcer l’impact de notre action." 
  },
  { 
    id: 3, 
    title: "Département de Gestion de Projet", 
    description: "Au sein de YOULIDA, le Département de Gestion de Projet pilote les actions concrètes de l'association. Il est chargé de transformer les idées en initiatives impactantes, en assurant la planification, la coordination, le suivi et l’évaluation de chaque projet.\n\nCe département veille à ce que chaque action réponde aux besoins réels des jeunes, tout en respectant nos valeurs et nos objectifs stratégiques. Grâce à une approche rigoureuse et participative, il garantit la qualité, la pertinence et la durabilité de nos interventions." 

  },
  { 
    id: 4, 
    title: "Département de Gestion des Finances et Administrations", 
    description: "Le Département de Gestion des Finances et de l’Administration assure la gestion financière et la stabilité administrative de l’association. Il gère les ressources financières de manière rigoureuse, transparente et conforme aux exigences légales et éthiques.\n\nSes missions incluent la planification budgétaire, le suivi des dépenses, la gestion des ressources matérielles et le soutien administratif aux différentes équipes. Ce département veille à ce que chaque ressource soit utilisée de façon efficace pour maximiser l’impact de nos actions. Grâce à sa rigueur et à sa fiabilité, il constitue un pilier essentiel au bon fonctionnement de l'organisation." 
  },
  { 
    id: 5, 
    title: "Département de Gestion des Relations Extérieures", 
    description: "Ce département est chargé de développer et de renforcer les liens entre l’association et ses partenaires extérieurs. Il assure la représentation de l’organisation auprès des institutions, des ONG, des bailleurs, des médias et d'autres acteurs clés.\n\n Sa mission est de construire des partenariats durables, de promouvoir la vision de YOULIDA à l’échelle locale, nationale et internationale, et de créer des opportunités de collaboration stratégique. Il joue un rôle clé dans le positionnement de l’association dans l’écosystème du développement. Grâce à ce département, l’organisation élargit son réseau, multiplie son impact et fait entendre la voix des jeunes au-delà de ses frontières." 
  },
  { 
    id: 6, 
    title: "Département Digital", 
    description: "Ce Département Digital accompagne la transformation numérique de l’organisation. Il développe des outils et des stratégies pour améliorer la communication en ligne, renforcer l’interaction avec les jeunes, et faciliter la gestion des projets à travers des solutions digitales innovantes.\n\n Il veille à ce que la technologie soit au service de notre mission : toucher plus de jeunes, simplifier nos actions et moderniser nos approches. Il joue un rôle essentiel dans l’adaptation de l’association aux défis du monde numérique." 
  },
];

const itemsPerPage = 4;

export default function Departements() {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedIds, setExpandedIds] = useState([]); // stocke les cartes ouvertes

  const totalPages = Math.ceil(fakeDepartements.length / itemsPerPage);

  const displayedItems = fakeDepartements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleDescription = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="mb-4 text-center fw-bold" style={{ color: "#1e293b" }}>
          Nos Départements
        </h2>
        <div className="row">
          {displayedItems.map((dept) => {
            const isExpanded = expandedIds.includes(dept.id);
            const shortDescription = dept.description.slice(0, 200) + "...";

            return (
              <div className="col-md-6 col-lg-3 mb-4" key={dept.id}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center text-primary fw-bold">{dept.title}</h5>
                    <p className="card-text" style={{ whiteSpace: 'pre-line' }}>
                      {isExpanded ? dept.description : shortDescription}
                    </p>
                    <button
                      className="btn btn-link mt-auto p-0 text-decoration-none text-primary"
                      onClick={() => toggleDescription(dept.id)}
                    >
                      {isExpanded ? "Voir moins ▲" : "Voir plus ▼"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <nav className="d-flex justify-content-center">
          <ul className="pagination">
            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
              >
                <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}