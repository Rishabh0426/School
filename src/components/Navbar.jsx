import { useState } from "react";
import { FaUniversity, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showExamDropdown, setShowExamDropdown] = useState(false);
  const [showTutorDropdown, setShowTutorDropdown] = useState(false);

  return (
    <nav className="bg-orange-500 text-white px-6 py-3 shadow-md">
      <div className="flex justify-between items-center md: mr-20">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 md:mr-20">
  <img src="/auraschool.png" alt="School Aura Logo" className="h-10" />
</div>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 text-sm font-medium ">
          <a href="#" className="hover:underline hover:text-yellow-500">Home</a>

          {/* Exam Solution Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setShowExamDropdown(true)}
            onMouseLeave={() => setShowExamDropdown(false)}
          >
            <a href="#" className="hover:underline hover:text-yellow-500 flex items-center">
              Exam Solution ▼
            </a>
            {showExamDropdown && (
              <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-md rounded-md text-black z-10">
                <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Class 12</a></li>
                <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Competitive Exam</a></li>
              </ul>
            )}
          </div>

          <a href="#" className="hover:underline hover:text-yellow-500">Online Study ▼</a>

          {/* Tutor Solution Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setShowTutorDropdown(true)}
            onMouseLeave={() => setShowTutorDropdown(false)}
          >
            <a href="#" className="hover:underline hover:text-yellow-500 flex items-center">
              Tutor Solution ▼
            </a>
            {showTutorDropdown && (
              <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-md rounded-md text-black z-10">
                <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Find Tutor</a></li>
                <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Become a Tutor</a></li>
              </ul>
            )}
          </div>

          <a href="#" className="hover:underline hover:text-yellow-500">Blogs</a>
          <a href="#" className="hover:underline hover:text-yellow-500">Contact Us</a>

          {/* School Management Button */}
          <button className="bg-black text-white flex items-center px-3 py-1.5 rounded-md cursor-pointer">
            <FaUniversity className="mr-2" />
            School Management
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-3 text-center">
          <a href="#" className="block hover:underline">Home</a>

          {/* Mobile Exam Solution Dropdown */}
          <div className="block text-center">
            <a href="#" className="block hover:underline">Exam Solution ▼</a>
            <ul className="bg-gray-100 mt-1 rounded-md border border-gray-300 shadow-md">
              <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Class 12</a></li>
              <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Competitive Exam</a></li>
            </ul>
          </div>

          <a href="#" className="block hover:underline">Online Study ▼</a>

          {/* Mobile Tutor Solution Dropdown */}
          <div className="block text-center">
            <a href="#" className="block hover:underline">Tutor Solution ▼</a>
            <ul className="bg-gray-100 mt-1 rounded-md border border-gray-300 shadow-md">
              <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Find Tutor</a></li>
              <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Become a Tutor</a></li>
            </ul>
          </div>

          <a href="#" className="block hover:underline">Blogs</a>
          <a href="#" className="block hover:underline">Contact Us</a>

          <button className="bg-black text-white px-4 py-2 rounded-md">
            <FaUniversity className="mr-2" />
            School Management
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
