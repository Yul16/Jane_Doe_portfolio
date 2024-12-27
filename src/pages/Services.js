import React from "react";

const Services = () => {
  const services = ["Service 1", "Service 2", "Service 3"];
  return (
    <section id="services" className="p-4 bg-light text-center">
      <div className="container">
        <h2 className="text-uppercase mb-4">Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{service}</h5>
                  <p className="card-text">Description de {service}.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
