import FeatureCard from "./FeatureCard";
import ScrollTop from "./ScrollTop";

const HSection = () => {
  const features = [
    { title: "ENTRANCE Solution", buttons: ["Exam", "Courses"] },
    { title: "COMPETITIVE Solution", buttons: ["Exam", "Courses"] },
    { title: "KG - 12TH SCHOOL", buttons: ["Exam", "Courses"] },
    { title: "TUTOR SOLUTION", buttons: ["Find Tutors", "Become Tutor"] },
  ];

  return (
    <div className="bg-orange-500 text-white py-10 text-center">
        <div >
        <h1 className="text-5xl font-bold md:mr-55">
        BE A <span className="text-black ">SMART <span className="sm:mr-20 md:mr-0 ">STUDENT</span> </span>
      </h1>
      <p className="text-2xl md:mr-70">SchoolAura Is A Smart Education Platform</p>
        </div>
    
      
      {/* Grid Layout: 2 cards per row on mobile, 4 on larger screens */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 justify-center shadow-10xl ">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default HSection;
