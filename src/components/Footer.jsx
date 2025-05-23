import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <div className="bg-footer">
    <footer className="text-light pt-5 pb-3">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* À propos */}
          <div className="col-md-3 mb-4">
            <h5 className="text-warning mb-3 fw-bold">À propos</h5>
            <p>
              YOULIDA œuvre pour un développement humain durable à travers des actions éducatives, sociales et culturelles.
            </p>
          </div>

          {/* Liens rapides */}
          <div className="col-md-3 mb-4">
            <h5 className="text-warning mb-3 fw-bold">Liens rapides</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Accueil</a></li>
              <li><a href="/a-propos" className="text-light text-decoration-none">À propos</a></li>
              <li><a href="/projets" className="text-light text-decoration-none">Projets</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h5 className="text-warning mb-3 fw-bold">Contact</h5>
            <p>Email : <a href="mailto:contact@youlida.org" className="text-light">contact@youlida.org</a></p>
            <p>Téléphone : +999 00 00 00 00</p>
          </div>

          {/* Réseaux sociaux */}
          <div className="col-md-3 mb-4">
            <h5 className="text-warning mb-3 fw-bold">Suivez-nous</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="text-light fs-5"><FaFacebookF /></a>
              <a href="#" className="text-light fs-5"><FaTwitter /></a>
              <a href="#" className="text-light fs-5"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Barre du bas */}
        <div className="text-center border-top pt-3 mt-4" style={{ borderColor: "#444" }}>
          <small className="text-secondary">© {new Date().getFullYear()} YOULIDA. Tous droits réservés.</small>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
// Ce code crée un pied de page réactif avec des sections pour les informations sur l'association, les liens rapides, les informations de contact et les réseaux sociaux. Il utilise Bootstrap pour le style et la mise en page, ainsi que des icônes de FontAwesome pour les réseaux sociaux. Le pied de page est conçu pour être responsive et s'adapter à différentes tailles d'écran.