import React from "react";
import { motion } from "framer-motion";

export default function BenefitsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start hidden and lower
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ amount: 0.2 }} 
      className="max-w-6xl mx-auto px-6 py-12"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Section - Text */}
        <div className="max-w-1xl p-2">
          <h2 className="text-4xl font-bold text-black">
            Benefits of <br />
            <span className="text-orange-500">Online Education</span>
          </h2>
          <div className="w-16 border-t-2 border-gray-500 my-2"></div>

          <p className="text-gray-700 mt-4">
            Online Education increases engagement by adding a human element.
            Studying in the comfort of your own home is convenient, but there
            are various other advantages of online study. It's especially
            beneficial for students who aren't as self-sufficient or who are
            used to the traditional educational model of "teacher and class."
          </p>

          <ul className="mt-4 text-gray-800 list-disc list-inside space-y-2">
            <li>Time and Location Flexibility</li>
            <li>Find Unlimited Course Category</li>
            <li>No Need to Carry Books</li>
            <li>Get Access in any mobile, Tab, Laptop with your credential</li>
            <li>Use your time when you are traveling, Outing, and free time</li>
            <li>Exam Practice before exam</li>
          </ul>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center">
          <img
            src="/r.png" // Ensure this image exists in the public folder
            alt="Thumbs Up Guy"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </motion.div>
  );
}
