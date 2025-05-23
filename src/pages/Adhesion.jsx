import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const texts = {
  FR: {
    actNow: "Assignez maintenant",
    why: "Pourquoi s'engager ?",
    whyText:
      "Bref paragraphe sur l'impact de l'engagement. Ensemble, nous pouvons transformer la société et avoir un impact positif.",
    how: "Comment s'engager ?",
    howList: [
      "Devenir bénévole",
      "Faire un don",
      "Proposer une idée ou un projet",
    ],
    member: "Devenir membre",
    form: "Lien formulaire",
    searchPlaceholder: "Rechercher...",
    infos: [
      "Bienvenue sur notre plateforme !",
      "Participez à nos actions solidaires.",
      "Découvrez comment vous engager.",
      "Contactez-nous pour plus d'infos.",
    ],
    donate: "Faire un don",
    collaborate: "Collaborons",
    noResult: "Aucun résultat trouvé.",
  },
  EN: {
    actNow: "Act now",
    why: "Why get involved?",
    whyText:
      "A brief paragraph about the impact of engagement. Together, we can transform society and have a positive impact.",
    how: "How to get involved?",
    howList: [
      "Become a volunteer",
      "Make a donation",
      "Propose an idea or project",
    ],
    member: "Become a member",
    form: "Form link",
    searchPlaceholder: "Search...",
    infos: [
      "Welcome to our platform!",
      "Join our solidarity actions.",
      "Learn how to get involved.",
      "Contact us for more info.",
    ],
    donate: "Donate",
    collaborate: "Collaborate",
    noResult: "No results found.",
  },
};

function InfoMarquee({ infos, stopRef }) {
  const marqueeRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrame;
    let speed = 1;
    function animate() {
      if (marqueeRef.current && stopRef.current) {
        const stopX =
          stopRef.current.getBoundingClientRect().left -
          marqueeRef.current.getBoundingClientRect().left;
        if (offset > stopX - 50) {
          setOffset(0);
        } else {
          setOffset((prev) => prev + speed);
        }
      }
      animationFrame = requestAnimationFrame(animate);
    }
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
    // eslint-disable-next-line
  }, [offset, stopRef]);
  return (
    <div
      className="overflow-hidden"
      style={{ height: 24, position: "relative", flex: 1 }}
    >
      <div
        ref={marqueeRef}
        style={{
          whiteSpace: "nowrap",
          position: "absolute",
          left: offset,
          top: 0,
          transition: "none",
        }}
      >
        {infos.map((txt, i) => (
          <span key={i} className="me-5 text-primary fw-semibold">
            {txt}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SEngager() {
  const [lang, setLang] = useState("FR");
  const [search, setSearch] = useState("");
  const langueRef = useRef(null);

  const t = texts[lang];
  const query = search.trim().toLowerCase();

  const containsQuery = (text) =>
    text.toLowerCase().includes(query);

  const sections = [
    {
      key: "actNow",
      show:
        query === "" ||
        containsQuery(t.actNow),
      render: () => (
        <section id="engage" className="text-center mb-5">
          <h1 className="mb-3">{t.actNow}</h1>
          <img
            src="appel.jpg"
            alt="Image cta"
            className="img-fluid mb-4"
            style={{ maxWidth: 350 }}
          />
        </section>
      ),
    },
    {
      key: "why",
      show:
        query === "" ||
        containsQuery(t.why) ||
        containsQuery(t.whyText),
      render: () => (
        <section className="mb-4">
          <h2>{t.why}</h2>
          <p>{t.whyText}</p>
        </section>
      ),
    },
    {
      key: "how",
      show:
        query === "" ||
        containsQuery(t.how) ||
        t.howList.some(containsQuery),
      render: () => (
        <section className="mb-4">
          <h2>{t.how}</h2>
          <ul className="list-group list-group-flush">
            {t.howList.map((l, i) => (
              <li className="list-group-item" key={i}>
                {l}
              </li>
            ))}
          </ul>
        </section>
      ),
    },
    {
      key: "member",
      show:
        query === "" ||
        containsQuery(t.member) ||
        containsQuery(t.form),
      render: () => (
        <section>
          <h2>{t.member}</h2>
          <a href="formulaire.html" className="btn btn-outline-secondary mt-2">
            {t.form}
          </a>
        </section>
      ),
    },
  ];

  const nothingFound = sections.every((s) => !s.show);

  // Afficher les boutons en bas si la recherche est vide ou si elle correspond à l'un des deux boutons
  const showBottomButtons =
    query === "" ||
    containsQuery(t.donate) ||
    containsQuery(t.collaborate);

  return (
    <div>
      {/* Header sans logo ni liens */}
      <header className="bg-light border-bottom py-2">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* Défilement informations */}
          <InfoMarquee infos={t.infos} stopRef={langueRef} />
          {/* Langue & Recherche */}
          <div className="d-flex align-items-center gap-2">
            <select
              ref={langueRef}
              className="form-select form-select-sm"
              style={{ width: 70 }}
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              <option value="FR">FR</option>
              <option value="EN">EN</option>
            </select>
            <input
              type="search"
              className="form-control form-control-sm"
              placeholder={t.searchPlaceholder}
              style={{ width: 140 }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="container my-5">
        {nothingFound ? (
          <div className="text-center text-muted">
            {t.noResult}
          </div>
        ) : (
          sections.filter((s) => s.show).map((s) => s.render())
        )}

        {/* Les deux boutons EN BAS */}
        {showBottomButtons && (
          <div className="text-center mt-5">
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-success btn-lg">
                {t.donate}
              </button>
              <button className="btn btn-primary btn-lg">
                {t.collaborate}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
