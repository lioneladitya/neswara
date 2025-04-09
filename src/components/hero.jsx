import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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

const categories = ["SMK", "SMA", "Barcelona", "Pasar", "Modern", "Peristiwa", "Daerah"];

const Hero = () => {
  return (
    <div className="w-full px-6 py-6 bg-gray-50 ">
      {/* Swiper Kategori */}
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
        className="py-4"
      >
        {categories.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-3 text-center bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <span className="text-sm sm:text-lg font-semibold uppercase text-gray-700 dark:text-white">{item}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Layout Mobile */}
      <div className="block md:hidden mt-6">
        <div className="relative rounded-lg overflow-hidden shadow-md">
          <img src={articles[0].image} alt="Main News" className="w-full h-96 object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-3">
            <p className="text-white text-lg font-bold">{articles[0].title}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {articles.slice(1, 3).map((article, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-sm">
              <img src={article.image} alt={`News ${index + 1}`} className="w-full h-28 object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-2">
                <p className="text-white text-xs font-semibold">{article.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Layout Desktop */}
      <div className="hidden md:grid grid-cols-3 gap-6 mt-6">
        {/* Kolom Kiri */}
        <div className="space-y-4">
          {articles.slice(0, 2).map((article, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-md">
              <img src={article.image} alt={`News ${index + 1}`} className="w-full h-40 object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-2">
                <p className="text-white text-sm font-semibold">{article.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Kolom Tengah */}
        <div className="flex flex-col items-center">
          <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
            <img src={articles[0].image} alt="Main News" className="w-full h-72 lg:h-96 object-cover" />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
              <p className="text-white text-lg font-bold">{articles[0].title}</p>
            </div>
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className="space-y-4">
          {articles.slice(1, 3).map((article, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-md">
              <img src={article.image} alt={`News ${index + 1}`} className="w-full h-40 object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-2">
                <p className="text-white text-sm font-semibold">{article.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Iklan */}
      <div className="mt-7 flex justify-center">
        <div className="w-full max-w-7xl bg-gray-200 p-6 rounded-lg shadow-lg text-center">
          <p className="font-bold text-gray-700 text-sm md:text-base">Ingin mengiklankan produk Anda? Hubungi kami untuk menampilkan di sini!</p>
        </div>
      </div>

      {/* Trending Section */}
      <div className="mt-10">
        <h2 className="font-bold text-2xl text-gray-800 dark:text-white text-center md:text-left">TRENDING THIS WEEK</h2>
      </div>
    </div>
  );
};

export default Hero;
