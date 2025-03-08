import { FaTasks, FaClipboardList, FaInfoCircle, FaEye, FaLink, FaShareAlt } from "react-icons/fa";

export default function Benefits() {
    const benefits = [
        { icon: <FaTasks size={40} />, title: "Task Activities", description: "Daily assignments and tasks can be easily completed through online availability of information. Subject-wise homework can be submitted online, helping students finish their tasks online." },
        { icon: <FaClipboardList size={40} />, title: "Exam Results", description: "Exam and assessment results of each individual student can be seen. The report cards will be generated online for each individual student." },
        { icon: <FaInfoCircle size={40} />, title: "Notice Updates", description: "The necessary announcements and updates will reach the students and parents quickly." },
        { icon: <FaEye size={40} />, title: "Monitoring", description: "All the essential academic and administrative tasks can be easily monitored, such as students' profiles, exam results, fee details, and transportation details." },
        { icon: <FaLink size={40} />, title: "Connectivity", description: "When all the information is available online and is shared regularly with parents and students, transparency will be maintained." },
        { icon: <FaShareAlt size={40} />, title: "Planning & Sharing", description: "It becomes important nowadays for students to share their thoughts and ideas. SchoolAura Smart Education Platform provides a perfect stage to showcase and share brilliant ideas." }
    ];

    return (
        <div className="max-w-6xl mx-auto text-center py-10">
            <h2 className="text-3xl font-bold text-black">BENEFITS OF SCHOOLAURA</h2>
            <h3 className="text-xl text-orange-600 font-bold mt-2">FOR STUDENT</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                {benefits.map((item, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center">
                        <div className="text-gray-700 mb-3">{item.icon}</div>
                        <h4 className="text-lg font-semibold">{item.title}</h4>
                        <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
