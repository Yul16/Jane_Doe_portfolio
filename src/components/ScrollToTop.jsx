import React, { useState, useEffect } from "react";
import "./ScrollToTop.scss"; // Ajoutez ce fichier pour le style

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true); // Affiche le bouton si on descend
      } else {
        setIsVisible(false); // Cache le bouton si on est en haut
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Nettoyage de l'écouteur pour éviter les fuites mémoire
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Défilement fluide
    });
  };

  return (
    isVisible && (
      <div
        className="scroll-to-top"
        onClick={scrollToTop}
        aria-label="Retour en haut"
      >
        <i className="fas fa-arrow-up"></i>
      </div>
    )
  );
};

export default ScrollToTop;
