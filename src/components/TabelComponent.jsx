import { useState } from "react";
import { motion } from "framer-motion";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("School");

  const tabs = ["School", "Competitive", "Enterance", "Tutors"];

  const data = {
    School: [
      { class: "11th Class", count: "182+" },
      { class: "12th Class", count: "178+" },
      { class: "6th Class", count: "151+" },
      { class: "7th Class", count: "150+" },
      { class: "10th Class", count: "150+" },
      { class: "9th Class", count: "141+" },
      { class: "8th Class", count: "135+" },
      { class: "5th Class", count: "87+" },
    ],
    Competitive: [
      { class: "SSC CHSL", count: "29+" },
      { class: "SSC CGL", count: "15+" },
      { class: "UPSC IAS", count: "8+" },
      { class: "SBI Clerk", count: "5+" },
      { class: "SSC CPO", count: "5+" },
      { class: "SSC MTS", count: "5+" },
      { class: "SBI PO", count: "3+" },
      { class: "RBI Grade B", count: "3+" },
      { class: "UPSC CAPF", count: "3+" },
      { class: "IBPS Clerk", count: "3+" },
      { class: "SSC JE", count: "2+" },
    ],
    Enterance: [
      { class: "VITEEE", count: "6+" },
      { class: "CUCET", count: "6+" },
      { class: "CAT", count: "5+" },
      { class: "XAT", count: "4+" },
      { class: "MAT", count: "1+" },
    ],
    Tutors: [{ class: "Coming Soon", count: "" }],
  };

  return (
    <div>
      {/* Animated Section */}
      <motion.div
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      transition={{ duration: 0.7, ease: "easeOut" }} 
      viewport={{ amount: 0.6 }} 
      className="p-6 text-center"
      >
        <div className="max-w-6xl mx-auto mt-10">
          {/* Title */}
          <h2 className="text-3xl font-bold text-black">
            PROVIDE <br />
            <span className="text-orange-500">BEST EDUCATIONAL</span>
          </h2>

          {/* Tab Section */}
          <div className="mt-6 flex rounded-md shadow-xl">
            {/* Left Sidebar Tabs */}
            <div className="w-1/4 bg-gray-100">
              {tabs.map((tab) => (
                <div
                  key={tab}
                  className={`p-4 text-lg font-semibold cursor-pointer transition ${
                    activeTab === tab
                      ? "bg-white text-orange-500 border-l-4 border-orange-500"
                      : "text-gray-600 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>

            {/* Right Content Box */}
            <div className="w-3/4 p-4 bg-white shadow-md">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data[activeTab].length > 0 ? (
                  data[activeTab].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-white shadow-md rounded-md"
                    >
                      <div className="w-10 h-10 bg-black flex items-center justify-center text-white font-bold mr-3">
                        N
                      </div>
                      <div>
                        <h3 className="text-orange-500 font-bold">
                          {item.class}
                        </h3>
                        <p className="text-gray-500">{item.count}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No Data Available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TabComponent;
