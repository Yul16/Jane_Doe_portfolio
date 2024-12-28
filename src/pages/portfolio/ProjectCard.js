import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={project.image}
        className="card-img-top"
        alt={project.title}
        style={{
          height: "200px",
          objectFit: "cover",
        }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        {/* Bouton "Voir" centré avec effet au survol */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className="btn mt-3"
            style={{
              border: "2px solid #0d6efd",
              color: "#0d6efd",
              backgroundColor: "#fff",
              borderRadius: "10px",
              fontWeight: "bold",
              padding: "5px 15px",
              cursor: "pointer",
              transition: "all 0.3s ease", // Animation pour effet au survol
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#0d6efd";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#fff";
              e.target.style.color = "#0d6efd";
            }}
            onClick={() => alert(`Voir le projet : ${project.title}`)}
          >
            Voir
          </button>
        </div>
        {/* Section tech avec fond légèrement plus foncé */}
        <p
          className="text-muted mt-3"
          style={{
            backgroundColor: "#f1f1f1",
            padding: "10px",
            textAlign: "center",
            fontSize: "0.9rem",
            fontWeight: "bold",
            color: "#444",
            borderTop: "1px solid #ddd",
          }}
        >
          {project.tech}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
