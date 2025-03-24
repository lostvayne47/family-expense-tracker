import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white">
      <nav className="w-full flex justify-between items-center px-10 py-5 bg-white bg-opacity-10 backdrop-blur-md shadow-md">
        <h1 className="text-3xl font-bold">BrandName</h1>
        <div className="space-x-4">
          <button className="px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-500 transition">
            Login
          </button>
          <button className="px-6 py-2 bg-white text-blue-500 rounded-lg hover:bg-opacity-80 transition">
            Sign Up
          </button>
        </div>
      </nav>
      <main className="flex flex-col items-center text-center mt-20 px-5">
        <h2 className="text-5xl font-extrabold mb-4">Welcome to BrandName</h2>
        <p className="text-lg mb-6">Your journey to excellence starts here.</p>
        <div className="space-x-4">
          <button className="px-8 py-3 bg-white text-blue-500 rounded-lg shadow-lg hover:bg-opacity-80 transition">
            Get Started
          </button>
          <button className="px-8 py-3 border border-white rounded-lg hover:bg-white hover:text-blue-500 transition">
            Learn More
          </button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
