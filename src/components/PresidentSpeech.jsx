import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import president from "../assets/president.jpg";
const PresidentSpeech = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        {/* Image du Président */}
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <img
            src={president}
            alt="Président"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Texte du Président */}
        <div className="col-md-7">
          <h2 className="mb-4 text-center fw-bold" style={{ color: "#1e293b" }}>Mot du Président</h2>
          <p>
            Bienvenue sur le site de <small className='text-primary fw-bold'>YOULIDA</small>.
            Notre mouvement est né de la conviction profonde que la jeunesse africaine a le pouvoir de transformer son avenir. Face aux défis de notre époque, nous avons choisi de ne pas subir, mais d’agir. Ensemble, nous bâtissons un espace où chaque jeune peut apprendre, s’exprimer et devenir acteur du changement.
            Aujourd’hui, plus que jamais, nous avons besoin de vous. Que vous soyez jeune, partenaire ou allié du développement, votre engagement compte.
            Rejoignez-nous. Contribuez. Faites entendre votre voix.
            Ensemble, construisons l’Afrique que nous voulons.
          </p>
          <p>
            Ensemble, construisons l’Afrique que nous voulons.
          </p>
          <p className="fw-bold mt-4 fs-3"  style={{ color: "#1e293b" }} > Mr Souleymane BARRO</p><p>Président de YOULIDA</p>
          
        </div>
      </div>
    </section>
  );
};

export default PresidentSpeech;
