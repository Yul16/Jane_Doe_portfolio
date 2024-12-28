import React, { useState } from "react";

const skillsData = [
  { name: "HTML5", level: "90%", color: "#ff5733" },
  { name: "CSS3", level: "80%", color: "#3498db" },
  { name: "JavaScript", level: "70%", color: "#f1c40f" },
  { name: "PHP", level: "60%", color: "#2ecc71" },
  { name: "React", level: "50%", color: "#9b59b6" },
];

const Home = () => {
  const [skills] = useState(skillsData);

  // Fonction pour scroller vers la section "À propos"
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: "url('/img/fondaccueil.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#fff" }}>
          Bonjour, je suis John Doe
        </h1>
        <h2 style={{ fontSize: "1.8rem", marginTop: "10px", color: "#fff" }}>
          Développeur web full stack
        </h2>
        <button
          onClick={scrollToAbout}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "1rem",
            backgroundColor: "#0d6efd",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          En savoir plus
        </button>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px 10%",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            maxWidth: "1200px",
            width: "100%",
          }}
        >
          {/* À propos */}
          <div
            style={{
              flex: 1,
              marginRight: "20px",
              marginBottom: "20px",
            }}
          >
            <h3
              style={{
                color: "#1e1e1e",
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "10px",
                position: "relative",
              }}
            >
              À propos
            </h3>
            {/* Ligne bleue */}
            <div
              style={{
                height: "4px",
                backgroundColor: "#0d6efd",
                width: "100%",
                marginBottom: "20px",
              }}
            ></div>
            <p
              style={{
                color: "#444",
                fontSize: "1rem",
                lineHeight: "1.6",
                marginBottom: "15px",
              }}
            >
              Passionné par l'informatique et les nouvelles technologies, j'ai
              suivi une formation d'<strong>intégrateur-développeur web</strong>{" "}
              au CEF. Au cours de cette formation, j'ai pu acquérir des bases
              solides pour travailler dans le domaine du{" "}
              <strong>développement web</strong>.
            </p>
            <p
              style={{
                color: "#444",
                fontSize: "1rem",
                lineHeight: "1.6",
                marginBottom: "15px",
              }}
            >
              Basé à Lyon, je suis en recherche d'une alternance au sein d'une
              agence digitale pour consolider ma formation de{" "}
              <strong>développeur web full stack</strong>.
            </p>
            <p style={{ color: "#444", fontSize: "1rem", lineHeight: "1.6" }}>
              J'accorde une attention particulière à la qualité du code que
              j'écris et je respecte les bonnes pratiques du web.
            </p>
          </div>

          {/* Compétences */}
          <div
            style={{
              flex: 1,
              textAlign: "center",
            }}
          >
            {/* Image du profil */}
            <img
              src="/img/profil.jpg"
              alt="Profile"
              style={{
                width: "100%",
                maxWidth: "400px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
              }}
            />
            {/* Compétences */}
            <h3
              style={{
                fontSize: "2rem",
                color: "#1e1e1e",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Mes compétences
            </h3>
            {skills.map((skill, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "15px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#444",
                    marginBottom: "5px",
                  }}
                >
                  {skill.name}
                </span>
                <div
                  style={{
                    width: "100%",
                    backgroundColor: "#e6e6e6",
                    borderRadius: "10px",
                    height: "20px",
                  }}
                >
                  <div
                    style={{
                      width: skill.level,
                      backgroundColor: skill.color,
                      height: "100%",
                      borderRadius: "10px",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
