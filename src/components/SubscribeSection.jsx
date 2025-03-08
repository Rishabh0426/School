import React from "react";
import FooterSection from "./FooterSection";

export default function SubscribeSection() {
  return (
    <div className="flex flex-col items-center">
      {/* Subscribe Section */}
      <div className="bg-gray-100 py-4 px-4 flex justify-center items-center relative w-[80%] h-[150px]">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50"
          style={{ backgroundImage: 'url(/pattern.png)' }}
        ></div>
        <div className="max-w-4xl w-full flex flex-col md:flex-row justify-between items-center relative z-10">
          <h2 className="text-3xl font-bold text-gray-900 text-center md:text-left">
            SUBSCRIBE OUR <br /> <span className="text-orange-500">NEWSLETTER</span>
          </h2>
          <div className="mt-4 md:mt-0 flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 w-full md:w-80 border rounded-l-md focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-5 py-3 rounded-r-md font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
