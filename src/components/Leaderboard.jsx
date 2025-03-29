import React from "react";

const Leaderboard = ({ players }) => {
  const sortedPlayers = players.sort((a, b) => {
    if (b.points === a.points) {
      return a.name.localeCompare(b.name); 
    }
    return b.points - a.points; 
  });

  const playerColors = [
    "bg-pink-100 border-pink-600",
    "bg-yellow-100 border-yellow-600",
    "bg-purple-100 border-purple-600",
    "bg-orange-100 border-orange-600",
    "bg-indigo-100 border-indigo-600",
    "bg-green-100 border-green-600",
    "bg-blue-100 border-blue-600",
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 font-poppins">
        Leaderboard
      </h2>
      <ul className="space-y-2">
        {sortedPlayers.map((player, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-4 rounded-lg border-2 ${
              playerColors[index % playerColors.length]
            }`}
          >
            <span className="text-lg font-semibold text-gray-900 font-poppins">
              {player.name}
            </span>
            <span className="text-lg font-bold text-gray-900 font-poppins">
              {player.points} points
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;