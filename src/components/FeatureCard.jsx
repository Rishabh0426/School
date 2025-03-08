const FeatureCard = ({ title, buttons }) => {
    return (
      <div className="bg-white rounded-lg  shadow-[0_15px_45px_rgba(0,0,0,0.7)] p-4 text-center w-[168px] h-[220px] flex flex-col justify-start hover:shadow-orange-500/50 transition">
        <h3 className="text-md font-bold text-gray-900 mb-3">{title}</h3>
        <div className="flex flex-col gap-2">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className="bg-orange-500 text-white font-medium px-4 py-2 rounded-full w-full hover:bg-orange-600 transition"
            >
              {btn}
            </button>
          ))}
        </div>
        <p className="text-black font-semibold cursor-pointer text-sm mt-auto">
          READ MORE <span className="ml-1">➜</span>
        </p>
      </div>
    );
};

export default FeatureCard;
