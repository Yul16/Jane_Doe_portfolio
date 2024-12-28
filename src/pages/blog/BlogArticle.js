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
        <a
          href={`/blog/${article.id}`} // Remplacez `article.id` par un identifiant unique
          className="btn btn-outline-primary"
          style={{
            borderRadius: "10px",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          Lire la suite
        </a>

        <p className="text-muted mt-3">Publié le {article.date}</p>
      </div>
    </div>
  );
};

export default BlogArticle;
