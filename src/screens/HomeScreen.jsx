import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="min-h-screen bg-[#E6E6FA] flex flex-col items-center justify-center p-4">
      {/* Page Heading */}
      <div className="text-center mb-8 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 font-poppins">
          The Mello Gang Dream 11 IPL Calculator
        </h1>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 w-full max-w-2xl px-4">
        <Link
          to="/fixtures"
          className="w-full md:w-auto px-8 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-all duration-300 font-poppins text-center text-lg md:text-xl"
        >
          Fixtures
        </Link>
        <Link
          to="/leaderboard"
          className="w-full md:w-auto px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 font-poppins text-center text-lg md:text-xl"
        >
          Leaderboard
        </Link>
        <Link
          to="/points-system"
          className="w-full md:w-auto px-8 py-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-all duration-300 font-poppins text-center text-lg md:text-xl"
        >
          Points System
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;