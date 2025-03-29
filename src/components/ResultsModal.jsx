import React from "react";

const ResultsModal = ({ match, results, onClose }) => {
  const positionColors = [
    "bg-pink-100 border-pink-600", // 1st Place
    "bg-yellow-100 border-yellow-600", // 2nd Place
    "bg-purple-100 border-purple-600", // 3rd Place
    "bg-orange-100 border-orange-600", // 4th Place
    "bg-indigo-100 border-indigo-600", // 5th Place
    "bg-green-100 border-green-600", // 6th Place
    "bg-blue-100 border-blue-600", // 7th Place
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 font-poppins">
          Results for {match.teams}
        </h2>
        <p className="text-sm text-gray-700 font-poppins mb-4">
          {match.date} | {match.time} | {match.location}
        </p>

        <div className="space-y-4">
          {results.map((result, index) => (
            <div
              key={index}
              className={`flex justify-between items-center p-3 rounded-lg border-2 ${
                positionColors[index % positionColors.length]
              }`}
            >
              <span className="text-lg font-semibold text-gray-900 font-poppins">
                {result.name}
              </span>
              {result.points !== undefined && (
                <span className="text-lg font-bold text-gray-900 font-poppins">
                  {result.points} points
                </span>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-6 px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-poppins"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ResultsModal;