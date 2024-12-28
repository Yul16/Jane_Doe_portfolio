import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-columns">
          {/* Colonne 1 */}
          <div className="footer-column">
            <h5>John Doe</h5>
            <p>
              40 Rue Laure Diebold
              <br />
              69009 Lyon, France
              <br />
              Téléphone : 06 20 30 40 50
            </p>
            <div className="social-icons">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 */}
          <div className="footer-column">
            <h5>Liens utiles</h5>
            <ul>
              <li>
                <a href="/">
                  <i className="fas fa-arrow-right"></i> Accueil
                </a>
              </li>
              <li>
                <a href="/about">
                  <i className="fas fa-arrow-right"></i> À propos
                </a>
              </li>
              <li>
                <a href="/services">
                  <i className="fas fa-arrow-right"></i> Services
                </a>
              </li>
              <li>
                <a href="/contact">
                  <i className="fas fa-arrow-right"></i> Me contacter
                </a>
              </li>
              <li>
                <a href="/legal">
                  <i className="fas fa-arrow-right"></i> Mentions légales
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="footer-column">
            <h5>Mes dernières réalisations</h5>
            <ul>
              <li>
                <a href="/portfolio#project1">
                  <i className="fas fa-arrow-right"></i> Fresh food
                </a>
              </li>
              <li>
                <a href="/portfolio#project2">
                  <i className="fas fa-arrow-right"></i> Restaurant Akira
                </a>
              </li>
              <li>
                <a href="/portfolio#project3">
                  <i className="fas fa-arrow-right"></i> Espace bien-être
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 */}
          <div className="footer-column">
            <h5>Mes derniers articles</h5>
            <ul>
              <li>
                <a href="/blog#article1">
                  <i className="fas fa-arrow-right"></i> Coder son site en
                  HTML/CSS
                </a>
              </li>
              <li>
                <a href="/blog#article2">
                  <i className="fas fa-arrow-right"></i> Vendre ses produits sur
                  le web
                </a>
              </li>
              <li>
                <a href="/blog#article3">
                  <i className="fas fa-arrow-right"></i> Se positionner sur
                  Google
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section copyright */}
      <div className="footer-copyright">
        <p>
          &copy; 2024 Designed by John Doe. <a href="#top">Haut de page</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
