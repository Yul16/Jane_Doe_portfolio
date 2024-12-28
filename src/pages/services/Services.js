import React from "react";
import "./Services.scss";

const Services = () => {
  const services = [
    {
      icon: "fas fa-paint-brush",
      title: "UX DESIGN",
      description:
        "L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.",
    },
    {
      icon: "fas fa-code",
      title: "DÉVELOPPEMENT WEB",
      description:
        "Le développement de sites web repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.",
    },
    {
      icon: "fas fa-search",
      title: "RÉFÉRENCEMENT",
      description:
        "Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre des techniques en œuvre pour améliorer sa position dans les résultats des moteurs de recherche.",
    },
  ];

  return (
    <section id="services" className="services-section">
      {/* Bannière */}
      <div
        className="services-banner"
        style={{
          backgroundImage: "url('/img/banniere.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "300px",
        }}
      ></div>

      {/* Titre principal */}
      <div className="container text-center mt-4">
        <h1 className="services-title">MON OFFRE DE SERVICES</h1>
        <p className="services-subtitle">
          Voici les prestations sur lesquelles je peux intervenir.
        </p>
        <div className="services-underline"></div>
      </div>

      {/* Contenu des services */}
      <div className="container mt-5">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4">
              <div className="card service-card shadow-sm p-3">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h5 className="card-title mt-3">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
