import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./custom.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./theme.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Import du bouton
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/portfolio/Portfolio";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/Contact";
import Legal from "./pages/legal/Legal";

const App = () => {
  return (
    <Router>
      {/* Header */}
      <Header />

      {/* Bouton "Haut de page" */}
      <ScrollToTop />

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;
