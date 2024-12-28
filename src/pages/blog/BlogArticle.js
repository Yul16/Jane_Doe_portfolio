import React from "react";

const BlogArticle = ({ article }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={article.image}
        className="card-img-top"
        alt={article.title}
        style={{
          height: "180px",
          objectFit: "cover",
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <a
            href={`/blog/${article.id}`} // Remplacez `article.id` par un identifiant unique
            className="btn btn-outline-primary"
            style={{
              borderRadius: "10px",
              fontWeight: "bold",
              padding: "5px 15px",
              textTransform: "uppercase",
            }}
          >
            Lire la suite
          </a>
        </div>
      </div>
      <div
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
        Publié le {article.date}
      </div>
    </div>
  );
};

export default BlogArticle;
