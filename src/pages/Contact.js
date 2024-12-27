import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-4 bg-primary text-light">
      <div className="container">
        <h2 className="text-uppercase text-center mb-4">Me contacter</h2>
        <div className="row">
          <div className="col-md-6">
            <h3>Mes coordonnées</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> Adresse
              <br />
              <i className="fas fa-phone"></i> Téléphone
              <br />
              <i className="fas fa-envelope"></i> Email
              <br />
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.377021074329!2d2.376539651050847!3d48.85102060907822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67208b0c38367%3A0x4411521d2a51c06a!2s8%20Rue%20Trousseau%2C%2075011%20Paris%2C%20France!5e0!3m2!1sfr!2sbe!4v1661093683217!5m2!1sfr!2sbe"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation de Jane Doe à Paris, 8 rue Trousseau"
            ></iframe>
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nom
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Sujet
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-light">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
