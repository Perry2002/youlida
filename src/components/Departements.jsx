import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const fakeDepartements = [
  { id: 1, title: "Département Éducation", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 2, title: "Département Santé", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem." },
  { id: 3, title: "Département Environnement", description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur." },
  { id: 4, title: "Département Culture", description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam." },
  { id: 5, title: "Département Recherche", description: "Quis autem vel eum iure reprehenderit qui in ea voluptate." },
  { id: 6, title: "Département Finances", description: "Temporibus autem quibusdam et aut officiis debitis." },
  { id: 7, title: "Département Communication", description: "At vero eos et accusamus et iusto odio dignissimos." },
  { id: 8, title: "Département Logistique", description: "Et harum quidem rerum facilis est et expedita distinctio." },
];

const itemsPerPage = 4;

export default function Departements() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(fakeDepartements.length / itemsPerPage);

  const displayedItems = fakeDepartements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-4">Nos Départements</h2>
        <div className="row">
          {displayedItems.map((dept) => (
            <div className="col-md-6 col-lg-3 mb-4" key={dept.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{dept.title}</h5>
                  <p className="card-text">{dept.description}</p>
                </div>
              </div>
            </div>
          ))}
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
