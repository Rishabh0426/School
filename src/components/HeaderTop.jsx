import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="flex justify-between items-center bg-white py-2 px-6 text-sm shadow-sm">
      {/* Left Section - Contact Info */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1 text-blue-600">
          <FaPhoneAlt className="text-orange-500" />
          <a href="tel:+919540349392" className="hover:underline c">
            +91-9540349392
          </a>
        </div>
        <div className="flex items-center space-x-1 text-gray-700">
          <FaEnvelope className="text-orange-500" />
          <a href="mailto:contact@schoolaura.com" className="hover:underline">
            contact@schoolaura.com
          </a>
        </div>
      </div>

      {/* Right Section - Action Buttons (Hidden on Mobile) */}
      <div className="hidden md:flex space-x-2 c">
        <button className="bg-green-500 text-white px-3 py-1 rounded-md text-sm hover:bg-green-600 cursor-pointer">
          WhatsApp
        </button>
        <button className="bg-yellow-500 text-white px-3 py-1 rounded-md text-sm hover:bg-yellow-600 cursor-pointer">
          Mobile App
        </button>
        <button className="bg-gray-900 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-800 cursor-pointer">
          Login
        </button>
        <button className="bg-gray-900 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-800 cursor-pointer">
          Registration
        </button>
      </div>
    </div>
  );
};

export default HeaderTop;
