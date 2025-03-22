import React from "react";
import { Link } from "react-router-dom";

const PointsSystemScreen = () => {
  return (
    <div className="min-h-screen bg-[#E6E6FA] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Heading */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-gray-900 font-poppins">
            Points System
          </h1>
        </div>

        {/* Points Breakdown */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-600">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 font-poppins">
            How Points Are Calculated
          </h2>
          <p className="text-lg text-gray-700 mb-6 font-poppins">
            Points are awarded based on player performance in each match. Here's the breakdown:
          </p>
          <ul className="space-y-4">
            <li className="flex items-center bg-pink-100 p-4 rounded-lg border-2 border-pink-600">
              <span className="text-lg font-semibold text-gray-900 font-poppins">
                1st Place: 10 points
              </span>
            </li>
            <li className="flex items-center bg-yellow-100 p-4 rounded-lg border-2 border-yellow-600">
              <span className="text-lg font-semibold text-gray-900 font-poppins">
                2nd Place: 7 points
              </span>
            </li>
            <li className="flex items-center bg-purple-100 p-4 rounded-lg border-2 border-purple-600">
              <span className="text-lg font-semibold text-gray-900 font-poppins">
                3rd Place: 5 points
              </span>
            </li>
            <li className="flex items-center bg-orange-100 p-4 rounded-lg border-2 border-orange-600">
              <span className="text-lg font-semibold text-gray-900 font-poppins">
                4th Place: 3 points
              </span>
            </li>
            <li className="flex items-center bg-indigo-100 p-4 rounded-lg border-2 border-indigo-600">
              <span className="text-lg font-semibold text-gray-900 font-poppins">
                5th Place: 2 points
              </span>
            </li>
            <li className="flex items-center bg-green-100 p-4 rounded-lg border-2 border-green-600">
              <span className="text-lg font-semibold text-gray-900 font-poppins">
                6th Place: 1 point
              </span>
            </li>
            <li className="flex items-center bg-blue-100 p-4 rounded-lg border-2 border-blue-600">
              <span className="text-lg font-semibold text-gray-900 font-poppins">
                7th Place: 0 points
              </span>
            </li>
            <li className="flex items-center bg-gray-100 p-4 rounded-lg border-2 border-gray-600">
              <span className="text-lg font-semibold text-gray-900 font-poppins">
                Participation: 2 points
              </span>
            </li>
          </ul>
        </div>

        {/* Go Back Button */}
        <div className="mt-12 flex justify-center">
        <Link
            to="/"
            className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-poppins"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PointsSystemScreen;