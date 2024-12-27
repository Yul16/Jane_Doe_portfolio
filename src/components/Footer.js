import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Colonne gauche : Carte Google Maps et icônes */}
          <div className="col-md-3">
            <h5>Localisation</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.377021074329!2d2.376539651050847!3d48.85102060907822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67208b0c38367%3A0x4411521d2a51c06a!2s8%20Rue%20Trousseau%2C%2075011%20Paris%2C%20France!5e0!3m2!1sfr!2sbe!4v1661093683217!5m2!1sfr!2sbe"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
            <div className="mt-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-2"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-2"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Autres colonnes */}
          <div className="col-md-3">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/about" className="text-light">
                  À propos
                </a>
              </li>
              <li>
                <a href="/services" className="text-light">
                  Services
                </a>
              </li>
              <li>
                <a href="/legal" className="text-light">
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Réalisations</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/portfolio#project1" className="text-light">
                  Projet 1
                </a>
              </li>
              <li>
                <a href="/portfolio#project2" className="text-light">
                  Projet 2
                </a>
              </li>
              <li>
                <a href="/portfolio#project3" className="text-light">
                  Projet 3
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Blog</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/blog#article1" className="text-light">
                  Article 1
                </a>
              </li>
              <li>
                <a href="/blog#article2" className="text-light">
                  Article 2
                </a>
              </li>
              <li>
                <a href="/blog#article3" className="text-light">
                  Article 3
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-3">
          <p>
            &copy; John Doe. Tous droits réservés.{" "}
            <a href="#top" className="text-light">
              Haut de page
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
