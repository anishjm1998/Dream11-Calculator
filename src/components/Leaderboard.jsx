// src/components/Leaderboard.jsx

import React from "react";

const Leaderboard = ({ players }) => {
  // Sort players by points in descending order
  const sortedPlayers = players.sort((a, b) => b.points - a.points);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <ul>
        {sortedPlayers.map((player, index) => (
          <li key={index} className="flex justify-between py-2">
            <span>{player.name}</span>
            <span>{player.points} points</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
