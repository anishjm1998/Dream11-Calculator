import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="min-h-screen bg-[#E6E6FA] flex flex-col items-center justify-center">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-extrabold text-gray-900 font-poppins">
          The Mello Gang Dream 11 IPL Calculator
        </h1>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <Link
          to="/fixtures"
          className="px-8 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-all duration-300 font-poppins"
        >
          Fixtures
        </Link>
        <Link
          to="/leaderboard"
          className="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 font-poppins"
        >
          Leaderboard
        </Link>
        <Link
          to="/points-system"
          className="px-8 py-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-all duration-300 font-poppins"
        >
          Points System
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;