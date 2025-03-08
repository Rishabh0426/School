import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion"; 

const VideoSection = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }} // Animate when in view
    transition={{ duration: 0.7, ease: "easeOut" }} // Smooth transition
    viewport={{ amount: 0.6 }} 
    className="p-6 text-center"
  >
   <div className="flex justify-center ">
      <div className="max-w-6xl w-full bg-gray-100 p-6 md:p-12 rounded-lg shadow-lg mb-20">
        <div className="flex flex-col md:flex-row ">
          {/* Video Placeholder */}
          <div className="md:w-1/2 bg-black flex items-center justify-center h-64 md:h-80">
            <div className="text-center text-white">
              <p className="text-lg font-semibold">Video unavailable</p>
              <p className="text-sm mt-2">
                This video is no longer available because the YouTube account associated with this video has been terminated.
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              VISIT OUR CAMPUS WITH <span className="text-orange-500">IMAGE GALLERY</span>
            </h2>
            <p className="text-gray-500 mt-2">
              Even slightly believable. If you are going to use a passage of Lorem Ipsum need.
            </p>
            <h3 className="mt-4 text-xl font-bold text-black">OR WATCH WITH VIDEO</h3>

            {/* Play Button */}
            <button className="mt-3 flex items-center text-black font-semibold hover:text-orange-500">
              <FaPlay className="text-orange-500 mr-2" />
              PLAY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  </motion.div>

    
  );
};

export default VideoSection;
