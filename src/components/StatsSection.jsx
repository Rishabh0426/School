import React from "react";
import { motion } from "framer-motion";

export default function StatsSection() {
  return (
    
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
      className="p-6 text-center"
    >
      <div
        className="relative bg-cover bg-center py-6 px-6 lg:max-w-6xl lg:mx-auto md:py-4"
        style={{ backgroundImage: "url('/background.jpg')", backgroundSize: "cover" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>

        {/* Stats Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-center">
            {[
              { value: "10000+", label: "Total Exams" },
              { value: "600+", label: "Courses" },
              { value: "3000+", label: "Success Stories" },
              { value: "4.5/5", label: "Rating" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ amount: 0.1 }}
                className="flex flex-col items-center p-2"
              >
                <h2 className="text-3xl font-bold">{stat.value}</h2>
                <p className="text-orange-500 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
    // section 2
    
  );
}
