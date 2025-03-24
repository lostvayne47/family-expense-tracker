import React from "react";
import { useTheme } from "./ThemeProvider";

const HomePage = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-4xl font-bold">Welcome to Home</h1>
      <p className="mt-4 text-lg">
        This is the home page. More content coming soon!
      </p>
    </div>
  );
};

export default HomePage;
