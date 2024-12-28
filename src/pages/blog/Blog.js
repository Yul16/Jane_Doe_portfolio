import React, { useState } from "react";
import BlogArticle from "./BlogArticle";
import "./Blog.scss";

const Blog = () => {
  const [articles] = useState([
    {
      id: 1,
      title: "Coder son site en HTML/CSS",
      description: "Introduction aux bases de la création de sites web.",
      image: "/img/blog/code.jpg",
      date: "22 août 2022",
    },
    {
      id: 2,
      title: "Vendre ses produits sur le web",
      description: "Guide pour réussir sa boutique en ligne.",
      image: "/img/blog/produit.jpg",
      date: "20 août 2022",
    },
    {
      id: 3,
      title: "Se positionner sur Google",
      description: "Techniques de référencement SEO pour votre site.",
      image: "/img/blog/google.jpg",
      date: "1 août 2022",
    },
    {
      id: 4,
      title: "Coder en responsive design",
      description: "Apprenez à adapter vos sites à tous les écrans.",
      image: "/img/blog/responsive.jpg",
      date: "31 juillet 2022",
    },
    {
      id: 5,
      title: "Techniques de référencement",
      description: "Optimisez le contenu pour attirer plus de visiteurs.",
      image: "/img/blog/seo.jpg",
      date: "30 juillet 2022",
    },
    {
      id: 6,
      title: "Apprendre à coder",
      description: "Introduction aux langages modernes de développement.",
      image: "/img/blog/codage.jpg",
      date: "12 juillet 2022",
    },
  ]);

  return (
    <section id="blog">
      {/* Bannière */}
      <div
        className="banner"
        style={{
          backgroundImage: "url('/img/banniere.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          width: "100%",
        }}
      ></div>

      {/* Blog Section */}
      <div className="p-4 bg-light text-center">
        <div className="container">
          <h2 className="text-uppercase mb-4">Blog</h2>
          <p className="mb-4">
            Retrouvez ici quelques articles sur le développement web.
          </p>
          <div className="underline"></div>
          <div className="row mt-5">
            {articles.map((article) => (
              <div key={article.id} className="col-md-4 col-sm-6 mb-4">
                <BlogArticle article={article} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
