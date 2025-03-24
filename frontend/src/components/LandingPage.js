import React from "react";
import { useTheme } from "./ThemeProvider";
import { useNavigate } from "react-router";
const LandingPage = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  function handleClick(event) {
    const location = event.target.name;
    if (location) {
      navigate(`/${event?.target?.name}`);
    }
  }
  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center transition-all duration-300 ${
        darkMode
          ? "bg-gradient-to-r from-gray-900 to-black text-white"
          : "bg-gradient-to-r from-gray-100 to-white text-black"
      }`}
    >
      <main className="flex flex-col items-center text-center mt-20 px-5">
        <h2 className="text-5xl font-extrabold mb-4">
          Welcome to Family Expense Tracker
        </h2>
        <p
          className={`text-lg mb-6 transition ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Your journey to budget excellence starts here.
        </p>
        <div className="space-x-4">
          <button
            name="login"
            onClick={handleClick}
            className={`px-6 py-2 border rounded-lg transition ${
              darkMode
                ? "border-gray-400 hover:bg-gray-700 hover:text-white"
                : "border-gray-600 hover:bg-gray-200 hover:text-black"
            }`}
          >
            Login
          </button>
          <button
            name="signup"
            onClick={handleClick}
            className={`px-6 py-2 rounded-lg transition ${
              darkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            Sign Up
          </button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
