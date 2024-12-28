import React from "react";
import { Helmet } from "react-helmet";
import "./Legal.scss";

const Legal = () => {
  return (
    <>
      {/* Helmet pour gérer le meta-tag noindex */}
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Mentions Légales</title>
      </Helmet>

      <section id="legal" className="p-4 bg-light text-center">
        <div className="container">
          {/* Titre */}
          <h2 className="text-uppercase mb-4">Mentions légales</h2>
          <div className="underline"></div>

          {/* Accordéon */}
          <div className="accordion mt-5" id="legalAccordion">
            {/* Éditeur */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#editor"
                >
                  Éditeur du site
                </button>
              </h2>
              <div id="editor" className="accordion-collapse collapse show">
                <div className="accordion-body text-start">
                  <p>
                    <strong>Jane Doe</strong>
                  </p>
                  <p>40 Rue Laure Diebold</p>
                  <p>69009 Lyon, France</p>
                  <p>
                    📞{" "}
                    <a href="tel:0620304050" className="text-primary">
                      06 20 30 40 50
                    </a>
                  </p>
                  <p>
                    📧{" "}
                    <a href="mailto:Jane.doe@gmail.com" className="text-primary">
                      Jane.doe@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Hébergeur */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#host"
                >
                  Hébergeur
                </button>
              </h2>
              <div id="host" className="accordion-collapse collapse">
                <div className="accordion-body text-start">
                  <p>
                    <strong>CodeSandBox</strong>
                  </p>
                  <p>Singel 542</p>
                  <p>1017 AZ Amsterdam</p>
                  <p>The Netherlands</p>
                  <p>
                    🌐{" "}
                    <a
                      href="https://codesandbox.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      codesandbox.io
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Crédits */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#credits"
                >
                  Crédits
                </button>
              </h2>
              <div id="credits" className="accordion-collapse collapse">
                <div className="accordion-body text-start">
                  <p>
                    <strong>Site développé par Jane Doe</strong>, étudiant du
                    CEF.
                  </p>
                  <p>
                    Les images libres de droit sont issues du site{" "}
                    <a
                      href="https://pixabay.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      Pixabay
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Legal;
