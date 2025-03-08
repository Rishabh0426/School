import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    name: "Vishal Kumar",
    location: "Delhi",
    image: "/user1.jpg",
    text: `"My daughter used to despise math, but now she can confidently take math tests. She's become enamoured with math, which is fantastic! Thank You School Aura for your tremendous support."`,
  },
  {
    name: "Ravi Kaushal",
    location: "Indore, Madhya Pradesh",
    image: "/user2.jpg",
    text: `"Excellent teacher with a fantastic teaching method; if I had had this teacher in school, I believe I would have achieved my goal of becoming a lecturer."`,
  },
  {
    name: "Rasmi Panday",
    location: "Delhi",
    image: "/user3.jpg",
    text: `"I have seen my son go from hating math to absolutely loving it. His marks have improved so much from last year. He looks forward to attending math sessions taken by ... Thank you, School Aura, for making math so much fun for my child! :)"`,
  },
  {
    name: "Rakesh Sharma",
    location: "Faridabad, Haryana",
    image: "/user4.jpg",
    text: `"A parent who has a phobia for math would dread to see her child going through the same. I am glad we found School Aura, which gave a great teacher and a great platform for learning."`,
  },
];

export default function TestimonialSection() {
  return (
    <motion.div className="flex justify-center mb-20">
      <motion.div
        className="py-12 px-6 bg-gray-200"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{  amount: 0.2 }}
      >
        <motion.h2
          className="text-center text-4xl font-bold text-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ }}
        >
          WHAT <span className="text-orange-500">PARENT SAYS</span>
        </motion.h2>

        <div className="max-w-9xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
              viewport={{  amount: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto"
              />
              <h3 className="mt-4 text-lg font-bold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-orange-500 text-sm">{testimonial.location}</p>
              <p className="text-gray-700 mt-2 text-sm">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
