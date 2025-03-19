import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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

// const categories = ["SMK", "SMA", "Real Madrid", "Pasar", "Modern", "Peristiwa", "Daerah"];

const Hero = () => {
  return (
    <div className="w-full px-6">
      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={8}
        navigation
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 16 },
          1024: { slidesPerView: 5 },
        }}
        className="py-2"
      >
        {["SMK", "SMA", "Real Madrid", "Pasar", "Modern", "Peristiwa", "Daerah"].map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-2 my-10 py-7 text-center bg-white rounded-lg shadow dark:bg-gray-800 dark:text-white">
              <span className="text-sm sm:text-lg font-bold uppercase">{item}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
