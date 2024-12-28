import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import "./Contact.scss";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section"
      style={{
        backgroundImage: "url('/img/contact.jpg')",
      }}
    >
      {/* Overlay bleu transparent */}
      <div className="contact-overlay"></div>

      {/* Contenu principal */}
      <div className="container contact-container">
        <h2 className="contact-title">Me contacter</h2>
        <p className="contact-intro">
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
        <div className="contact-underline"></div>

        <div className="row">
          <div className="col-lg-6">
            <ContactForm />
          </div>
          <div className="col-lg-6">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
