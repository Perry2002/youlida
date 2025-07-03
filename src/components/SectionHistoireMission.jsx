import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SectionHistoireMission() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Titre global */}
        <h2 className="mb-4 text-center fw-bold" style={{ color: "#1e293b" }}>Notre Histoire & Notre Mission</h2>

        <div className="row">
          {/* Histoire */}
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-white shadow rounded h-100">
              <h3 className="mb-4 text-center text-primary fw-bold">Notre Histoire</h3>
              <p>
                <small className='fw-bold'>YOULIDA</small> est le fruit de l'engagement de jeunes leaders africains décidés à transformer leur génération en moteur de changement. Face aux inégalités et à l’exclusion, ils ont uni leurs compétences pour créer un espace où chaque jeune peut apprendre, s’exprimer et agir.
                C’est une communauté engagée, porteuse d’espoir et de résilience. Elle prouve que la jeunesse, rassemblée, peut transformer son avenir et inspirer le monde.
                Rejoignez-nous. Ensemble, construisons émerger l’Afrique de demain.

              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-white shadow rounded h-100">
              <h3 className="mb-4 text-center text-primary fw-bold">Notre Mission</h3>
              <p>
                La mission de <small className='fw-bold'>YOULIDA</small> est de permettre aux adolescents et jeunes de prendre des décisions éclairées sur leur vie éducative, leur sexualité, leur bien-être et leur santé. Elle vise à déclencher un processus de transformation en faveur d'une gestion positive, constructive et non violente des conflits, tout en outillant les jeunes à défendre leurs droits et à faire face aux défis de leur développement physique et émotionnel.
                Le but est d'engager tous les adolescents et jeunes africains à être des acteurs de changement pour eux-mêmes et leurs communautés dès l'âge de l'adolescence. Elle aspire à créer une Afrique radieuse, où les jeunes sont pleinement investis dans la construction d'un avenir meilleur.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
