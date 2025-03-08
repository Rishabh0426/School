import React from "react";

const Second = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
      
      <div className="relative bg-black text-white p-10 max-w-md md:max-w-lg shadow-lg order-2 md:order-1">
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark Overlay */}
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-4">- 256 Courses</h2>
          <h2 className="text-2xl font-bold mb-4">- Expert Teachers</h2>
          <h2 className="text-2xl font-bold">- Online Education</h2>
        </div>
      </div>

      {/* Right Side: Text Section8*/}
      <div className="max-w-2xl order-1 md:order-2">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Why Online Study With SchoolAura
        </h2>
        <p className="text-gray-700">
          The world is changing for the better. Because of the advancement of
          technology, geek minds have grown tired of doing more work, carrying
          books, notebooks, and how much to buy books?
        </p>
        <p className="text-gray-700 mt-3">
          <strong>Solution:</strong> Now you can find a simple solution with
          SchoolAura. These days almost everyone has a smartphone, tablet, or
          laptop. Just open your device and start your study from anywhere,
          anytime, whether you're traveling, sitting in the park, etc.
        </p>
        <p className="text-gray-700 mt-3">
          Now use your time wisely and gain knowledge every second. Use your
          device for the right things, not to waste your time.
        </p>
      </div>
    </div>
  );
};

export default Second;
