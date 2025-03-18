import React from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import Footer from "./component/footer";
import HeroSection from "./component/herosection";
import newSarticle from "./component/newsarticle";
import NewsArticle from "./component/newsarticle";
import LiveNewsSection from "./component/livenewsection";
import LatestNewsSection from "./component/latestnewssection.jsx";
import Navbar from "./component/navbar";
import Hero from "./component/hero.jsx";
import NewsSection from "./component/newssection.jsx";


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
