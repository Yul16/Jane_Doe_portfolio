import React from "react";

const Legal = () => {
  return (
    <section id="legal" className="p-4 bg-light text-center">
      <div className="container">
        <h2 className="text-uppercase mb-4">Mentions légales</h2>
        <div className="accordion" id="legalAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#editor"
              >
                L'Éditeur du site
              </button>
            </h2>
            <div id="editor" className="accordion-collapse collapse">
              <div className="accordion-body">Détails sur l'éditeur.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#host"
              >
                L'Hébergeur du site
              </button>
            </h2>
            <div id="host" className="accordion-collapse collapse">
              <div className="accordion-body">Détails sur l'hébergeur.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#credits"
              >
                Crédits
              </button>
            </h2>
            <div id="credits" className="accordion-collapse collapse">
              <div className="accordion-body">Liens et crédits.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;
