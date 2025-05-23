import React from "react";

const articles = [
  {
    id: 1,
    title: "Atelier de sensibilisation à l'environnement",
    excerpt: "Retour sur notre dernier atelier qui a réuni plus de 100 participants autour des enjeux écologiques...",
    image: "https://via.placeholder.com/600x400?text=Article+1",
    date: "10 Avril 2025",
  },
  {
    id: 2,
    title: "Nos actions dans les écoles rurales",
    excerpt: "YOULIDA continue ses activités d'accompagnement scolaire dans plusieurs localités du pays...",
    image: "https://via.placeholder.com/600x400?text=Article+2",
    date: "02 Avril 2025",
  },
  {
    id: 3,
    title: "Zoom sur notre projet de bibliothèques mobiles",
    excerpt: "Découvrez comment nous rapprochons la lecture des communautés isolées...",
    image: "https://via.placeholder.com/600x400?text=Article+3",
    date: "27 Mars 2025",
  },
];

const BlogPage = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "#f7f9fc" }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-4" style={{ color: "#1e293b" }}>
          Blog & Actualités
        </h2>
        <p className="text-center text-muted mb-5">
          Suivez nos dernières activités, événements et projets.
        </p>

        <div className="row g-4">
          {articles.map((article) => (
            <div className="col-md-4" key={article.id}>
              <div className="card border-0 shadow-sm h-100">
                <img src={article.image} className="card-img-top" alt={article.title} />
                <div className="card-body">
                  <small className="text-muted">{article.date}</small>
                  <h5 className="card-title mt-2" style={{ color: "#003087" }}>{article.title}</h5>
                  <p className="card-text">{article.excerpt}</p>
                  <a href={`/blog/${article.id}`} className="btn btn-sm" style={{ backgroundColor: "#1e293b", color: "#fff" }}>
                    Lire l'article
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
