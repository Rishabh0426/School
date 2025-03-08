import React from "react";

export default function MobileAppSection() {
  return (
    <div className="flex flex-col md:flex-row items-start bg-gray-100 p-10">
      {/* Left Side: Image (Aligned to Top) */}
      <div className=" md:w-1/2 flex justify-center md:justify-start self-start">
        <img
          src="/Ris.png" // Replace with actual image path
          alt="Mobile App"
          className="w-400 h-100 rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full md:w-1/2 text-left px-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Easy to Access with{" "}
          <span className="text-orange-500">Mobile APP</span>
        </h2>
        <p className="mt-4 text-gray-700">
          If you're looking for easily accessible resources for your classroom,
          then you're in the right place. Online learning with the Android app
          is very easy to access. That's why we've hand-curated the School Aura
          free app and website. Easy to use and learn!
        </p>
        <p className="mt-2 text-gray-700">
          To learn online, you need to be reasonably comfortable with Smart
          Mobile Phone, Tab, Laptops, and the internet. The advantage of
          learning online via an android app is that you can pause the
          video/audio whenever you need to take notes or simply absorb what has
          been said. Another fantastic feature of online learning is that you
          can re-listen to different parts as needed, which is something you
          can't do in a live lecture!
        </p>

        {/* Download Button */}
        <a
          href="#"
          className="mt-6 inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Download Now
        </a>
      </div>
    </div>
  );
}
