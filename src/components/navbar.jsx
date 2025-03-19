import React, { useState } from "react";
import { FaSearch, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import NewsImage from "../assets/logoneswara.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <img src={NewsImage} alt="News Logo" className="w-32 h-auto object-cover" />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-semibold text-gray-800">
          {["LIFESTYLE", "EDUCATION", "REGION", "SPORT", "TOUR & TRAVEL", "NATIONAL", "BUSINESS"].map((item, index) => (
            <a key={index} href="#" className="hover:text-yellow-500 transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4 text-gray-700">
          <FaUserCircle className="text-2xl cursor-pointer" />
          <FaSearch className="text-2xl cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <FaBars className="text-2xl text-gray-700" />
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div className={`fixed top-0 left-0 w-4/5 h-full bg-white shadow-xl transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:hidden`}>
        <div className="p-5 flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-between items-center">
            <img src={NewsImage} alt="Logo" className="w-24" />
            <button onClick={() => setIsOpen(false)}>
              <FaTimes className="text-2xl text-gray-700" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="mt-5 space-y-4 font-semibold text-gray-800">
            {["LIFESTYLE", "EDUCATION", "REGION", "SPORT", "TOUR & TRAVEL", "NATIONAL", "BUSINESS"].map((item, index) => (
              <a key={index} href="#" className="block text-lg border-b pb-2">
                {item}
              </a>
            ))}
          </div>

          {/* User & Search Icons */}
          <div className="mt-auto flex items-center space-x-4 text-gray-700 border-t pt-4">
            <FaUserCircle className="text-2xl cursor-pointer" />
            <FaSearch className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
