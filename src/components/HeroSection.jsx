import jeune from "../assets/jeune.jpg";
const HeroSection = () => {
  return (
    <div
      className="text-white text-center py-5"
      style={{
        backgroundImage: "url('" + jeune + "')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <h1 className="display-3 fw-bold">Bienvenue chez YOULIDA</h1>
        {/* <p className="lead fw-bold " style={{color: "#00AEEF" }}>
          Ensemble, construisons un avenir solidaire, humain et durable.
        </p> */}
        <a href="/adhesion" className="btn btn-warning mt-3">Rejoignez-nous</a>
      </div>
    </div>
  );
};

export default HeroSection;
