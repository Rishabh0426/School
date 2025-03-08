import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

export default function StatsSection2() {
  const stats = [
    { icon: <MdSchool size={50} />, value: "108+", label: "Happy Schools" },
    { icon: <FaUsers size={50} />, value: "5360+", label: "Happy Parents" },
    { icon: <FaGraduationCap size={50} />, value: "58030+", label: "Students" },
    { icon: <FaChalkboardTeacher size={50} />, value: "10+", label: "Happy Tutors" },
  ];

  return (
    <div className="flex justify-center">
      <div className="bg-gray-100 py-12 px-6 max-w-8xl w-full mb-20 mt-20 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start hidden and lower
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            transition={{ duration: 0.7, ease: "easeOut" }} // Smooth transition
            viewport={{ amount: 0.2 }}
            className="relative w-full md:w-1/3"
          >
            <div className="absolute inset-0 bg-gray-800 w-3/4 h-3/4"></div>
            <img src="/pic.png" alt="Teacher" className="relative z-10 w-full rounded-md" />
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.5 }}
            className="w-full md:w-2/3 text-center md:text-left mt-6 md:mt-0"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              WE <br /><span className="text-orange-500">ARE SPREADING</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex flex-col items-center text-gray-900"
                >
                  <div className="text-black">{stat.icon}</div>
                  <h2 className="text-3xl font-bold">{stat.value}</h2>
                  <p className="text-orange-500 text-lg font-semibold">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
