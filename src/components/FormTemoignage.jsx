import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";

const FormTemoignage = () => {
  const [nom, setNom] = useState("");
  const [message, setMessage] = useState("");
  const [note, setNote] = useState(0);
  const [hover, setHover] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nom && message && note > 0) {
      // Simuler une soumission
      console.log("Témoignage soumis :", { nom, message, note });

      setSubmitted(true);

      // Réinitialiser le formulaire
      setNom("");
      setMessage("");
      setNote(0);
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  };

  return (
    <section className="py-5 bg-white">
      <div className="container" style={{ maxWidth: "600px" }}>
        <h2 className="text-center fw-bold mb-4" style={{ color: "#1e293b" }}>
          Laisser un témoignage
        </h2>

        {submitted ? (
          <div className="alert alert-success text-center">
            Merci pour votre témoignage !
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">
                Nom complet
              </label>
              <input
                type="text"
                className="form-control"
                id="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="Ex. : Sarah M."
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Votre témoignage
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Partagez votre expérience avec YOULIDA..."
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label d-block">Votre note</label>
              {[...Array(5)].map((_, i) => {
                const rating = i + 1;
                return (
                  <label key={i}>
                    <input
                      type="radio"
                      name="note"
                      value={rating}
                      onClick={() => setNote(rating)}
                      style={{ display: "none" }}
                    />
                    <FaStar
                      size={24}
                      className="me-1"
                      color={rating <= (hover || note) ? "#ffc107" : "#e4e5e9"}
                      onMouseEnter={() => setHover(rating)}
                      onMouseLeave={() => setHover(null)}
                      style={{ cursor: "pointer" }}
                    />
                  </label>
                );
              })}
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Envoyer mon témoignage
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default FormTemoignage;