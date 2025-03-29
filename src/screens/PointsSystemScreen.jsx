import React from "react";
import { Link } from "react-router-dom";

const PointsSystemScreen = () => {
  return (
    <div className="min-h-screen bg-[#E6E6FA] flex items-center justify-center">
      <div className="max-w-4xl w-full px-6">
        {/* Page Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 font-poppins">
            Points System
          </h1>
        </div>

        {/* Points Breakdown */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-purple-600">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 font-poppins">
            How Points Are Calculated
          </h2>
          <p className="text-base text-gray-700 mb-4 font-poppins">
            Points are awarded based on player performance in each match. Here's the breakdown:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center bg-pink-100 p-3 rounded-lg border-2 border-pink-600">
              <span className="text-base font-semibold text-gray-900 font-poppins">
                1st Place: 10 points
              </span>
            </li>
            <li className="flex items-center bg-yellow-100 p-3 rounded-lg border-2 border-yellow-600">
              <span className="text-base font-semibold text-gray-900 font-poppins">
                2nd Place: 8 points
              </span>
            </li>
            <li className="flex items-center bg-purple-100 p-3 rounded-lg border-2 border-purple-600">
              <span className="text-base font-semibold text-gray-900 font-poppins">
                3rd Place: 6 points
              </span>
            </li>
            <li className="flex items-center bg-orange-100 p-3 rounded-lg border-2 border-orange-600">
              <span className="text-base font-semibold text-gray-900 font-poppins">
                4th Place: 4 points
              </span>
            </li>
            <li className="flex items-center bg-indigo-100 p-3 rounded-lg border-2 border-indigo-600">
              <span className="text-base font-semibold text-gray-900 font-poppins">
                5th Place: 3 points
              </span>
            </li>
            <li className="flex items-center bg-green-100 p-3 rounded-lg border-2 border-green-600">
              <span className="text-base font-semibold text-gray-900 font-poppins">
                6th Place: 2 points
              </span>
            </li>
            <li className="flex items-center bg-blue-100 p-3 rounded-lg border-2 border-blue-600">
              <span className="text-base font-semibold text-gray-900 font-poppins">
                7th Place: 1 point
              </span>
            </li>
          </ul>
          <p className="text-base text-gray-700 mt-4 font-poppins">
            <strong>Note:</strong> All players receive an additional 2 points for participating in the contest.
          </p>
        </div>

        {/* Go Back Button */}
        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-poppins"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PointsSystemScreen;