import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LeaderboardScreen = () => {
  const [players, setPlayers] = useState([
    { name: "Anish", points: 0 },
    { name: "Supriyam", points: 0 },
    { name: "Shashwata", points: 0 },
    { name: "Aron", points: 0 },
    { name: "Ashwin", points: 0 },
    { name: "Akash", points: 0 },
    { name: "Indrajit", points: 0 },
  ]);

  useEffect(() => {
    const savedResults = localStorage.getItem("fixtureResults");
    if (savedResults) {
      const results = JSON.parse(savedResults);
      const playerPoints = {};

      Object.values(results).forEach((fixtureResults) => {
        fixtureResults.forEach((result) => {
          if (!playerPoints[result.name]) {
            playerPoints[result.name] = 0;
          }
          playerPoints[result.name] += result.points;
        });
      });

      const updatedPlayers = players.map((player) => ({
        ...player,
        points: playerPoints[player.name] || 0,
      }));

      updatedPlayers.sort((a, b) => b.points - a.points);

      const finalPlayers = [];
      for (let i = 0; i < updatedPlayers.length; i++) {
        if (i > 0 && updatedPlayers[i].points === updatedPlayers[i - 1].points) {
          finalPlayers.push({ ...updatedPlayers[i], position: finalPlayers[i - 1].position });
        } else {
          finalPlayers.push({ ...updatedPlayers[i], position: i + 1 });
        }
      }

      setPlayers(finalPlayers);
    }
  }, []);

  const resetScores = () => {
    localStorage.removeItem("fixtureResults");
    window.location.reload();
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold text-gray-900 font-poppins">
            Leaderboard
          </h1>
        </div>

        {/* Leaderboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold text-gray-900 font-poppins">
                    #{player.position}
                  </span>
                  <span className="text-xl font-semibold text-gray-800 font-poppins">
                    {player.name}
                  </span>
                </div>
                <span className="text-xl font-bold text-gray-900 font-poppins">
                  {player.points} pts
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-12 flex justify-center space-x-4">
          <Link
            to="/"
            className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-poppins">
            Go Back
          </Link>
          <button
            onClick={resetScores}
            className="px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all font-poppins"
          >
            Reset Scores
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardScreen;