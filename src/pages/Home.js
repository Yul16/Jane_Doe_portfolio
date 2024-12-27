import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{ backgroundColor: "#00c8ff", padding: "100px 0" }}
        className="text-center text-light"
      >
        <img
          src="/img/jane-doe.png"
          alt="Jane Doe"
          className="rounded-circle"
          style={{ width: "150px", height: "150px" }}
        />
        <h1 className="mt-4 text-uppercase">JANE DOE</h1>
        <h2>Développeuse web fullstack</h2>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="p-4 text-center">
        <div className="container">
          <h2 className="text-uppercase mb-4">Portfolio</h2>
          <div className="row">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <div key={project} className="col-12 col-sm-6 col-md-4 mb-4">
                <div
                  className="card"
                  style={{
                    backgroundColor: project % 2 === 0 ? "#a3daff" : "#c3ffc3",
                  }}
                >
                  <img
                    src={`img/portfolio/projet${project}.png`}
                    className="card-img-top"
                    alt={`Projet ${project}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Projet {project}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="apropos"
        style={{ backgroundColor: "#00c8ff", padding: "50px 0" }}
        className="text-center text-light"
      >
        <div className="container">
          <h2 className="text-uppercase mb-4">À propos</h2>
          <div className="row">
            <div className="col-md-6">
              <h3>Lorem ipsum</h3>
              <p>
                Hac ex causa conlaticia stipe Valerius humatur ille Publicola et
                subsidiis amicorum mariti inops cum liberis uxor alitur Reguli.
              </p>
            </div>
            <div className="col-md-6">
              <h3>Dolor sit amet</h3>
              <p>
                Utque aegrum corpus quassari etiam levibus solet offensis, ita
                animus eius angustus et tener.
              </p>
            </div>
          </div>
          <a href="/cv.pdf" className="btn btn-outline-light mt-3">
            Téléchargez mon CV
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-4">
        <div className="container">
          <div className="row">
            {/* Contact Details */}
            <div className="col-md-6">
              <h3>Mes coordonnées</h3>
              <p>
                <i className="fas fa-map-marker-alt"></i> 8 rue Trousseau, 75011
                Paris
                <br />
                <i className="fas fa-phone"></i> 06 14 90 96 44
                <br />
                <i className="fas fa-envelope"></i> jane.doe@gmail.com
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.377021074329!2d2.376539651050847!3d48.85102060907822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67208b0c38367%3A0x4411521d2a51c06a!2s8%20Rue%20Trousseau%2C%2075011%20Paris%2C%20France!5e0!3m2!1sfr!2sbe!4v1661093683217!5m2!1sfr!2sbe"
                width="100%"
                height="200"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div className="col-md-6">
              <h3>Formulaire de contact</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="name">Votre nom (*)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Votre email (*)</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone">Votre numéro de téléphone (*)</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message">Votre message (*)</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
