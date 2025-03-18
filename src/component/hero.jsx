import React from "react";
import NewsImage from "../assets/barcelona.jpg"; 

const articles = [
  {
    date: "2025-01-06 10:24:24",
    title: "OPTIMISME EKONOMI INDONESIA DI TENGAH TANTANGAN GLOBAL",
    image: "https://neswara.id/file_manager/berita/1736391139-aii.jpeg",
  },
  {
    date: "2025-01-04 07:55:44",
    title: "CHATGPT BILANG: CHATGPT SEMANGAT BARU DALAM...",
    image: "https://neswara.id/file_manager/berita/1736391139-aii.jpeg",
  },
  {
    date: "2025-01-05 23:02:04",
    title: "PEMULIHAN EKONOMI INDONESIA: PELUANG DAN TANTANGAN DI...",
    image: "https://neswara.id/file_manager/berita/1736391139-aii.jpeg",
  },
];

const categories = ["SMK", "SMA", "BARCELONA", "PASAR", "MODERN"];

const Hero = () => {
  return (
    <div className="">
      {/* Categories */}
      <div className="flex space-x-2 mt-4 overflow-x-auto justify-center gap-10 bg-grey p-2 rounded shadow">
        {categories.map((cat, index) => (
          <button key={index} className="px-20 py-2 bg-white rounded hover:bg-gray-300 font-bold">
            {cat}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-3 gap-4 mt-6 px-28">
        {/* Left Section */}
        <div className="col-span-1">
          {articles.map((article, index) => (
            <div key={index} className="bg-white p-4 rounded shadow mb-4">
              <img src={article.image} alt="news" className="w-100 h-50 object-cover rounded mx-auto" />
              <p className="text-xs text-gray-500 mt-2">{article.date}</p>
              <h2 className="text-sm font-semibold mt-1">{article.title}</h2>
            </div>
          ))}
        </div>

        {/* Middle Section */}
        <div className="col-span-1 flex justify-center items-center">
          <div className="bg-white p-10 rounded shadow w-full text-center">
          <img
            src={NewsImage}
            alt="Main News"
            className="w-300 h-150 object-cover rounded mx-auto"
          />
            <h2 className="text-lg font-semibold">Latest News</h2>
            <p className="text-gray-600">Stay updated with the latest information.</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-1">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-gray-800 text-white p-12 rounded shadow mb-4 text-center">
              <h2 className="text-sm">TIDAK ADA BERITA</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;