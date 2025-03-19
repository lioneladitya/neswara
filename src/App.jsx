import React from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import Footer from "./components/footer.jsx";
import HeroSection from "./components/herosection.jsx";
import newSarticle from "./components/newsarticle.jsx";
import NewsArticle from "./components/newsarticle.jsx";
import LiveNewsSection from "./components/livenewsection.jsx";
import LatestNewsSection from "./components/latestnewssection.jsx.jsx";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import NewsSection from "./components/newssection.jsx";


const NewsPortal = () => {
  return (

    <div>
      <Navbar/>
      <main className="mt-16">
        {/* Konten halaman */}
      </main>
      <Hero/>

      <HeroSection />

      <NewsArticle />

      <LiveNewsSection />

      <LatestNewsSection />

      <Footer />
    </div>

  );
};

export default NewsPortal;
