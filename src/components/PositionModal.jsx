import React, { useState } from "react";
import { getTotalPoints, getParticipationPoints } from "../services/pointsService";

const PositionModal = ({ match, onSave, onClose }) => {
  const predefinedPlayers = ["Anish", "Supriyam", "Shashwata", "Aron", "Ashwin", "Akash", "Indrajit"];
  const [rankings, setRankings] = useState(Array(7).fill(""));
  const [isAbandoned, setIsAbandoned] = useState(false);

  const handleRankingChange = (index, player) => {
    const newRankings = [...rankings];
    newRankings[index] = player;
    setRankings(newRankings);
  };

  const handleSave = () => {
    let results;
    if (isAbandoned) {
      results = predefinedPlayers.map((player) => ({
        name: player,
        points: getParticipationPoints(),
      }));
    } else {
      results = rankings.map((player, index) => ({
        name: player,
        position: index + 1,
        points: getTotalPoints(index + 1),
      }));
    }

    onSave(results);
    onClose();
  };

  const handleTiedPositions = () => {
    const tiedPosition = parseInt(prompt("Enter the tied position (e.g., 1, 2, etc.):"));
    if (tiedPosition && tiedPosition > 0 && tiedPosition <= rankings.length) {
      const newRankings = [...rankings];
      newRankings.splice(tiedPosition, 0, newRankings[tiedPosition - 1]);
      newRankings.splice(tiedPosition + 1, 1);
      setRankings(newRankings);
    } else {
      alert("Invalid position entered!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"> {/* Fixed in the center */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg w-[600px] mx-auto"> {/* Consistent background */}
        <h3 className="text-2xl font-bold mb-6 text-gray-900 font-poppins">
          Assign Rankings for {match.teams}
        </h3>

        {/* Rankings (Dropdowns) */}
        <div className="space-y-4">
          {rankings.map((player, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-800 font-poppins">
                Rank {index + 1}
              </span>
              <select
                value={player}
                onChange={(e) => handleRankingChange(index, e.target.value)}
                className="p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-48"
              >
                <option value="">Select Player</option>
                {predefinedPlayers.map((playerName) => (
                  <option key={playerName} value={playerName} disabled={rankings.includes(playerName) && playerName !== player}>
                    {playerName}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Buttons for Tied Positions and Abandoned Match */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={handleTiedPositions}
            className="px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors font-poppins"
          >
            Tied Positions
          </button>
          <button
            onClick={() => setIsAbandoned(!isAbandoned)}
            className={`px-6 py-2 ${
              isAbandoned ? "bg-red-500" : "bg-gray-500"
            } text-white rounded-full hover:bg-red-600 transition-colors font-poppins`}
          >
            {isAbandoned ? "Match Abandoned" : "Mark as Abandoned"}
          </button>
        </div>

        {/* Save and Cancel Buttons */}
        <div className="mt-8 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors font-poppins"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors font-poppins"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PositionModal;