import { motion } from "framer-motion";
import LoginForm from "./LoginForm";
import HSection from "./HSection";
import Second from "./Second";
import TabComponent from "./TabelComponent";
import Benefits from "./Benefits";
import MobileAppSection from "./MobileAppSection";
import BenefitsSection from "./BenefitsSection";
import StatsSection from "./StatsSection";
import StatsSection2 from "./StatsSection2";
import VideoSection from "./VideoSection";
import TestimonialSection from "./TestimonialSection";
import SubscribeSection from "./SubscribeSection";
import ScrollToTop from "./ScrollTop";
import ScrollTop from "./ScrollTop";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <div className="relative bg-orange-500 py-16 flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 animated-bg"></div>{" "}
       
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-10 w-full max-w-6xl">
          {/* Apply animation to LoginForm */}
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.8, y: 50 }} // Shrunk & hidden inside
            animate={{ opacity: 1, scale: 1, y: 0 }} // Expands & moves outward
            transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
          >
            <LoginForm />
          </motion.div>

          {/* Apply animation to HSection */}
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, scale: 0.8, y: 50 }} // Shrunk & hidden inside
            animate={{ opacity: 1, scale: 1, y: 0 }} // Expands & moves outward
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <HSection />
          </motion.div>
        </div>
        {/* Curved Transition */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 198">
          <path
            fill="#ffffff"
            d="M0,160 C360,140 720,140 1080,160 C1260,170 1440,150 1440,150 V200 H0Z"
          ></path>
        </svg>
      </div>

      {/* White Background for the Rest */}
      <div className="bg-white min-h-screen">
        {/* Additional Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.9, ease: "easeOut" }} 
          viewport={{ amount: 0.5 }} 
          className="p-6 text-center"
        >
          <div className="max-w-6xl mx-auto">
            <Second />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ amount: 0.2 }} 
          className="p-6 text-center"
        >
          <div className="max-w-6xl mx-auto">
            <img src="/Layer-20.png" alt="" />
          </div>
        </motion.div>
        <ScrollTop/>
        <TabComponent/>
        <Benefits/>
        <MobileAppSection/>
        <BenefitsSection/>
        <StatsSection/>
        <StatsSection2/>
        <VideoSection/>
        <TestimonialSection/>
        <SubscribeSection/>
       
      </div>
    </div>
  );
};

export default HomePage;
