import React from "react";

const Blog = () => {
  const articles = [1, 2, 3, 4, 5, 6];
  return (
    <section id="blog" className="p-4 bg-light text-center">
      <div className="container">
        <h2 className="text-uppercase mb-4">Blog</h2>
        <div className="row">
          {articles.map((article) => (
            <div key={article} className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Article {article}</h5>
                  <p className="card-text">
                    Introduction de l'article {article}.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
