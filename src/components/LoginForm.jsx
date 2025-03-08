import { useState } from "react";

const LoginForm = () => {
  const [isParent, setIsParent] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-80">
      <img
        src="https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/10-1024.png"
        alt="User"
        className="w-16 h-16 mx-auto mb-2"
      />

      {/* Tab Switcher */}
      <div className="flex justify-center border-b mb-4">
        <span
          className={`cursor-pointer pb-1 ${
            !isParent
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-400"
          }`}
          onClick={() => setIsParent(false)}
        >
          Student Login
        </span>

        <span
          className={`cursor-pointer ml-4 pb-1 ${
            isParent
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-400"
          }`}
          onClick={() => setIsParent(true)}
        >
          Parents Login
        </span>
      </div>

      {/* Form Inputs */}
      <input
        type="text"
        placeholder="Mobile Number or Key"
        className="w-full border p-2 mb-2"
      />

      <input
        type="password"
        placeholder={isParent ? "Parent Password" : "Student Password"}
        className="w-full border p-2 mb-2"
      />

      <button className="w-full bg-black text-white py-2 rounded-md">
        Login
      </button>

      {/* Links */}
      <div className="flex justify-between text-sm mt-2">
        <span className="text-blue-500 cursor-pointer">Forgot Password</span>
        <span className="text-blue-500 cursor-pointer">Create Account</span>
      </div>
    </div>
  );
};

export default LoginForm;
