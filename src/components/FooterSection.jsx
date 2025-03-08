import React from "react";

export default function FooterSection() {
  return (
    <div className="bg-[#0D0D23] text-white w-full py-8 px-10">
      {/* Footer Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-orange-500 text-lg font-bold">About Us</h3>
          <p className="mt-2 text-gray-300 text-sm leading-relaxed">
            SchoolAura Smart Education Platform enhances learning by making it more effective and goal-oriented for students.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-orange-500 text-lg font-bold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li>➤ About Us</li>
            <li>➤ Benefits</li>
            <li>➤ Blogs</li>
            <li>➤ Testimonials</li>
            <li>➤ Features</li>
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h3 className="text-orange-500 text-lg font-bold">Help & Support</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li>➤ Services</li>
            <li>➤ Support</li>
            <li>➤ Terms & Conditions</li>
            <li>➤ Privacy Policy</li>
            <li>➤ Sitemap</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-orange-500 text-lg font-bold">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <img src="/facebook-icon.png" alt="Facebook" className="w-8 h-8 cursor-pointer hover:opacity-80" />
            <img src="/instagram-icon.png" alt="Instagram" className="w-8 h-8 cursor-pointer hover:opacity-80" />
            <img src="/twitter-icon.png" alt="Twitter" className="w-8 h-8 cursor-pointer hover:opacity-80" />
            <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-8 h-8 cursor-pointer hover:opacity-80" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-6" />

      {/* Contact & Address Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <img src="/call-icon.png" alt="Call" className="w-6 h-6" />
            <div>
              <p className="text-orange-500 font-bold">CALL US</p>
              <p className="text-blue-400">+91-9540349392</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <img src="/mail-icon.png" alt="Mail" className="w-6 h-6" />
            <div>
              <p className="text-orange-500 font-bold">MAIL US</p>
              <p className="text-blue-400">contact@schoolaura.com</p>
            </div>
          </div>
        </div>

        {/* Office Address */}
        <div className="flex items-center mt-4 md:mt-0 space-x-3">
          <img src="/location-icon.png" alt="Location" className="w-6 h-6" />
          <div>
            <p className="text-orange-500 font-bold">Office Address</p>
            <p className="leading-relaxed">
              E 44/3, Pocket D, Okhla Phase II, Okhla Industrial Area, New Delhi, Delhi 110020, India
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-6" />

      {/* Copyright */}

      <div className="text-center text-gray-400 text-sm flex justify-between mr-50 ml-50">
        <p>© 2021 SchoolAura. All Rights Reserved</p>
        <p className="mt-2">
          Design & Development by{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Insoftlink Software
          </a>
        </p>
      </div>
    </div>
  );
}
