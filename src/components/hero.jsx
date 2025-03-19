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
    <div className="w-full px-6">
      {/* Categories dengan Side Scrolling */}
      <div className="w-full overflow-x-auto scrollbar-hide mt-23 bg-gray-200 p-3 rounded-lg shadow flex justify-center">
        <div className="flex space-x-4 snap-x snap-mandatory px-4">
          {categories.map((cat, index) => (
            <button
              key={index}
              className="px-6 py-2 bg-white rounded-lg hover:bg-gray-300 font-bold snap-center whitespace-nowrap"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 px-4">
        {/* Left Section */}
        <div className="md:col-span-1">
          {articles.map((article, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg mb-4">
              <img
                src={article.image}
                alt="news"
                className="w-full h-40 object-cover rounded-lg"
              />
              <p className="text-xs text-gray-500 mt-2">{article.date}</p>
              <h2 className="text-sm font-semibold mt-1">{article.title}</h2>
            </div>
          ))}
        </div>

        {/* Middle Section */}
        <div className="md:col-span-1 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full text-center">
            <img
              src={NewsImage}
              alt="Main News"
              className="w-full h-60 object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-4">Latest News</h2>
            <p className="text-gray-600">Stay updated with the latest information.</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:col-span-1">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-4 text-center"
            >
              <h2 className="text-sm">TIDAK ADA BERITA</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
