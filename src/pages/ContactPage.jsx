import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";


const ContactPage = () => {
  return (
    <div className="contact-page py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#1e293b" }}>
          Contactez-nous
        </h2>
        <p className="text-center mb-5 text-muted">
          Une question ? Un partenariat ? L’équipe de <strong>YOULIDA</strong> est à votre écoute.
        </p>

        <div className="row g-4">
          {/* Formulaire de contact */}
          <div className="col-md-7">
            <div className="card shadow p-4 border-0">
              <h5 className="mb-3 fw-semibold" style={{ color: "#1e293b" }}>
                Envoyez-nous un message
              </h5>
              <form>
                <div className="mb-3">
                  <label className="form-label">Nom complet</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Adresse e-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Sujet</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Objet du message"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Votre message..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn w-100"
                  style={{ backgroundColor: "#1e293b", color: "#fff" }}
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>

          {/* Informations de contact */}
          <div className="col-md-5">
            <div
              className="card text-white p-4 shadow border-0 h-100"
              style={{ backgroundColor: "#1e293b" }}
            >
              <h5 className="fw-semibold mb-3">Informations de contact</h5>
              <p>
                <strong>Email :</strong> contact@youlida.org
              </p>
              <p>
                <strong>Téléphone :</strong> +999 00 00 00 00
              </p>
              <p>
                <strong>Adresse :</strong> Emplacement
              </p>
              <hr className="border-light" />
              <h6 className="fw-semibold">Suivez-nous :</h6>
              <div className="d-flex gap-3 mt-2">
                <a href="#" className="text-light fs-5"><FaFacebookF /></a>
                              <a href="#" className="text-light fs-5"><FaTwitter /></a>
                              <a href="#" className="text-light fs-5"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
