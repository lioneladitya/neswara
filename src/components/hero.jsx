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

const categories = ["SMK", "SMA", "Real Madrid", "Pasar", "Modern", "Peristiwa", "Daerah"];

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
        {categories.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-2 my-10 text-center bg-white rounded-lg shadow dark:bg-gray-800 dark:text-white">
              <span className="text-sm sm:text-lg font-bold uppercase">{item}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Layout Mobile */}
      <div className="block md:hidden mt-6">
        <div className="relative">
          <img
            src={articles[0].image}
            alt="Main News"
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-2">
            <p className="text-white text-lg font-bold">{articles[0].title}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {articles.slice(1, 3).map((article, index) => (
            <div key={index} className="relative">
              <img
                src={article.image}
                alt={`News ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-1">
                <p className="text-white text-xs">{article.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Layout Desktop */}
      <div className="hidden md:grid grid-cols-3 gap-6 mt-6">
        {/* Kolom Kiri */}
        <div className="flex flex-col space-y-4">
          {articles.slice(0, 2).map((article, index) => (
            <div key={index} className="relative">
              <img
                src={article.image}
                alt={`News ${index + 1}`}
                className="w-full h-40 md:h-32 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-1">
                <p className="text-white text-sm text-left">{article.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Kolom Tengah */}
        <div className="col-span-1 flex flex-col items-center">
          <div className="relative w-full">
            <img
              src={articles[0].image}
              alt="Main News"
              className="w-full h-60 lg:h-96 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-2">
              <p className="text-white text-lg font-bold text-left">{articles[0].title}</p>
            </div>
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className="flex flex-col space-y-4">
          {articles.slice(1, 3).map((article, index) => (
            <div key={index} className="relative">
              <img
                src={article.image}
                alt={`News ${index + 1}`}
                className="w-full h-40 md:h-32 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-1">
                <p className="text-white text-sm text-left">{article.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Iklan Persegi Panjang */}
      <div className="mt-4 mb-4 flex justify-center">
        <div className="w-full max-w-7xl bg-gray-200 p-4 md:p-8 rounded-lg shadow-lg text-center">
          <p className="font-bold text-gray-600 text-sm md:text-base">
            Ingin mengiklankan produk Anda? Hubungi kami untuk menampilkan di sini!
          </p> 
        </div>
      </div>
      
      {/* trending section */}
      <div className="mt-10 mb-4 flex justify-left">
          <div className="w-full max-w-7xl">
          <h2 className="font-bold text-xl font-bold text-center md:text-left ">
              Trending This Week
            </h2>
          </div>
          </div>
    </div>
  );
};

export default Hero;
