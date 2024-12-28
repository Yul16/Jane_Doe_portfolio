import React from "react";

const ContactForm = () => {
  return (
    <div>
      {/* Titre du formulaire */}
      <h3
        style={{
          textAlign: "left", // Alignement à gauche
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#000",
          marginBottom: "10px",
        }}
      >
        Formulaire de contact
      </h3>
      {/* Ligne bleue sous le titre */}
      <div
        style={{
          height: "4px",
          width: "100%", // Prend toute la largeur de la colonne
          backgroundColor: "#0d6efd",
          marginBottom: "20px",
        }}
      ></div>

      {/* Formulaire */}
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Nom"
            required
            style={{
              backgroundColor: "#f9f9f9",
              borderColor: "#ddd",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Adresse email"
            required
            style={{
              backgroundColor: "#f9f9f9",
              borderColor: "#ddd",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Numéro de téléphone"
            required
            style={{
              backgroundColor: "#f9f9f9",
              borderColor: "#ddd",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="Sujet"
            required
            style={{
              backgroundColor: "#f9f9f9",
              borderColor: "#ddd",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="message"
            placeholder="Votre message"
            rows="4"
            required
            style={{
              backgroundColor: "#f9f9f9",
              borderColor: "#ddd",
              borderRadius: "5px",
            }}
          ></textarea>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center", // Centre le bouton horizontalement
          }}
        >
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              backgroundColor: "#0d6efd",
              borderColor: "#0d6efd",
              borderRadius: "20px",
              padding: "10px 30px",
              fontWeight: "bold",
            }}
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
