import React from "react";

const ContactInfo = () => {
  return (
    <div>
      {/* Titre de la section Mes coordonnées */}
      <h3
        style={{
          textAlign: "left", // Alignement à gauche
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#000",
          marginBottom: "10px",
        }}
      >
        Mes coordonnées
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

      {/* Coordonnées */}
      <p>
        <i className="fas fa-map-marker-alt"></i> 40 Rue Laure Diebold, 69009
        Lyon, France
      </p>
      <p>
        <i className="fas fa-phone"></i> 06 20 30 40 50
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.1602965932695!2d4.801277115639919!3d45.7869781791064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea4aa556f47f%3A0x39ac27bb5364f660!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1661093683217!5m2!1sfr!2sfr"
        width="100%"
        height="250"
        style={{ border: 0, borderRadius: "10px" }}
        allowFullScreen=""
        loading="lazy"
        title="Localisation"
      ></iframe>
    </div>
  );
};

export default ContactInfo;
