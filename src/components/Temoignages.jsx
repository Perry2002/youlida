import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaStar } from "react-icons/fa"; // npm install react-icons
import { Link } from "react-router-dom";

const temoignagesData = [
  {
    id: 1,
    nom: "Mariam BAGAYOKO ",
    message:
      "À YOULIDA, nous refusons de rester spectateurs face aux injustices que vivent les jeunes. Malgré les obstacles, nous portons haut notre engagement pour une société plus juste et inclusive. Être Chargée d’engagement et de bien-être, c’est militer chaque jour pour que chaque voix compte, surtout celles qu’on veut faire taire.",
    photo: "https://via.placeholder.com/100",
    note: 5,
  },
  {
    id: 2,
    nom: "SOMDA Karelle Aurore",
    message:
      "YOULIDA aujourd'hui est une famille pour moi, le symbole d'une communauté déterminée et résiliente à faire changer les choses à apporter sa contribution dans l'édifice d'un Burkina meilleur et plus d'un monde meilleur où les adolescents sont engagés et responsables de leurs actions.... plus que des valeurs et des visions commune YOULIDA est une association à laquelle j'appartiens réellement, cet sentiment d'appartenance que l'on récent lorsqu'on rentre à la maison ou au village, lorsqu'on est de retour au bercail... c'est toujours un plaisir pour moi d'apprendre avec mes frères et sœurs dans cette communauté où je me retrouve parfaitement et fidèlement, où je ne suis jamais une étrangère mais une fille du village de la famille qui est toujours la bienvenue...Comme toute communauté en action œuvrant pour le changement à YOULIDA nous rencontrons souvent des hauts et des bas, la chaleur humaine, la solidarité qui règne toujours au sein de cette communauté me persuade chaque jour un peu plus que j'ai trouvé ma place, j'ai trouvé mon laboratoire pour mes essais mes tests et apprentissage le plus important dans un climat paisible et un environnement sain.",
    photo: "https://via.placeholder.com/100",
    note: 4,
  },
  {
    id: 3,
    nom: "Sara K.",
    message:
      "Je recommande vivement YOULIDA à tous les jeunes qui veulent s’impliquer et faire bouger les choses.",
    photo: "https://via.placeholder.com/100",
    note: 5,
  },
];

const renderStars = (note) => {
  return [...Array(5)].map((_, i) => (
    <FaStar key={i} color={i < note ? "#ffc107" : "#e4e5e9"} />
  ));
};

const TemoignagesCarousel = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4" style={{ color: "#1e293b" }}>
          Témoignages des membres
        </h2>

        {/* Carrousel Bootstrap avec effet fade */}
        <div
          id="temoignagesCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div className="carousel-inner">
            {temoignagesData.map((temoin, index) => (
              <div
                className={`carousel-item text-center ${
                  index === 0 ? "active" : ""
                }`}
                key={temoin.id}
              >
                <div className="d-flex flex-column align-items-center">
                  <img
                    src={temoin.photo}
                    alt={temoin.nom}
                    className="rounded-circle mb-3"
                    width="100"
                    height="100"
                  />
                  <h5 className="fw-bold">{temoin.nom}</h5>
                  <p className="fst-italic w-75 mx-auto">“{temoin.message}”</p>
                  <div className="mb-2">{renderStars(temoin.note)}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Flèches navigation */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#temoignagesCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
            <span className="visually-hidden">Précédent</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#temoignagesCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
            <span className="visually-hidden">Suivant</span>
          </button>
        </div>

        {/* Bouton laisser un témoignage */}
        <div className="text-center mt-4">
            <Link to="/laisser-temoignage" className="btn btn-primary">
                Laisser un témoignage
            </Link>
        </div>
      </div>
    </section>
  );
};

export default TemoignagesCarousel;