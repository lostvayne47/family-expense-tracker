import React from "react";
import { useTheme } from "./ThemeProvider";
import { Link } from "react-router";
const SignupPage = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`w-full max-w-md p-8 shadow-lg rounded-lg ${
          darkMode ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        <h2 className="text-3xl font-extrabold text-center mb-6">Sign Up</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className={`w-full px-4 py-2 rounded-lg border ${
              darkMode
                ? "border-gray-600 bg-gray-700 text-white"
                : "border-gray-300 bg-white text-black"
            }`}
          />
          <input
            type="email"
            placeholder="Email"
            className={`w-full px-4 py-2 rounded-lg border ${
              darkMode
                ? "border-gray-600 bg-gray-700 text-white"
                : "border-gray-300 bg-white text-black"
            }`}
          />
          <input
            type="password"
            placeholder="Password"
            className={`w-full px-4 py-2 rounded-lg border ${
              darkMode
                ? "border-gray-600 bg-gray-700 text-white"
                : "border-gray-300 bg-white text-black"
            }`}
          />
          <button
            type="submit"
            className={`w-full px-4 py-2 rounded-lg font-bold transition ${
              darkMode
                ? "bg-blue-600 hover:bg-blue-500"
                : "bg-blue-500 hover:bg-blue-400 text-white"
            }`}
          >
            Create Account
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
