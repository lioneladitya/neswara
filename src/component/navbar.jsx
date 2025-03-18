import React from "react";
import { FaSearch, FaUserCircle, FaEllipsisH } from "react-icons/fa";
import Logo from "../assets/logoneswara.png"; // Pastikan path logo sesuai

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-10">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Neswara Logo" className="h-10" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 font-semibold text-gray-700">
          <li className="hover:text-yellow-500 cursor-pointer">LIFESTYLE</li>
          <li className="hover:text-yellow-500 cursor-pointer">EDUCATION</li>
          <li className="hover:text-yellow-500 cursor-pointer">REGION</li>
          <li className="hover:text-yellow-500 cursor-pointer">SPORT</li>
          <li className="hover:text-yellow-500 cursor-pointer">TOUR & TRAVEL</li>
          <li className="hover:text-yellow-500 cursor-pointer">NATIONAL</li>
          <li className="hover:text-yellow-500 cursor-pointer">BUSINESS</li>
          <li>
            <FaEllipsisH className="text-gray-600 text-lg cursor-pointer hover:text-yellow-500" />
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <FaSearch className="text-gray-600 text-lg cursor-pointer hover:text-yellow-500" />
          <FaUserCircle className="text-gray-600 text-2xl cursor-pointer hover:text-yellow-500" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
