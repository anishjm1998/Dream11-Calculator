import React from "react";
import { getTotalPoints } from "../services/pointsService";

const TiedPositionsModal = ({ isOpen, onClose, tiedPosition, updatedRankings, onSave }) => {
  if (!isOpen || !tiedPosition || updatedRankings.length === 0) return null;

  // Find the players who will be tied
  const playerAtTiedPosition = updatedRankings[tiedPosition - 1];
  const tiedWithPlayer = updatedRankings[tiedPosition];

  // Generate display rankings with correct tied positions
  const displayRankings = [];
  let currentRank = 1;
  
  // First, process player rankings up to the tied position
  for (let i = 0; i < tiedPosition - 1; i++) {
    displayRankings.push({
      player: updatedRankings[i],
      rank: currentRank,
      isTied: false,
      points: getTotalPoints(currentRank)
    });
    currentRank++;
  }
  
  // Add the tied players with the same rank and points
  displayRankings.push({
    player: playerAtTiedPosition,
    rank: currentRank,
    isTied: true,
    points: getTotalPoints(currentRank)
  });
  
  displayRankings.push({
    player: tiedWithPlayer,
    rank: currentRank,
    isTied: true,
    points: getTotalPoints(currentRank)
  });
  
  // Skip a rank since we used it twice for the tied players
  currentRank++;
  
  // Process remaining players with adjusted ranks
  for (let i = tiedPosition + 1; i < updatedRankings.length; i++) {
    // Skip one position because we have two players in the tied position
    displayRankings.push({
      player: updatedRankings[i],
      rank: currentRank,
      isTied: false,
      points: getTotalPoints(currentRank)
    });
    currentRank++;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg w-[600px] mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-gray-900 font-poppins">
          Tied Positions
        </h3>

        <div className="mb-6 p-4 bg-yellow-100 rounded-lg">
          <p className="text-lg font-medium text-yellow-800">
            Players {playerAtTiedPosition} and {tiedWithPlayer} will be tied at position {tiedPosition}
          </p>
          <p className="text-sm text-yellow-700 mt-2">
            Both players will receive {getTotalPoints(tiedPosition)} points.
          </p>
        </div>

        {/* Updated Rankings Display */}
        <div className="space-y-4 mt-6">
          <h4 className="text-lg font-medium">Updated Rankings:</h4>
          {displayRankings.map((item, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-between p-3 rounded-lg ${
                item.isTied ? "bg-yellow-50 border border-yellow-200" : ""
              }`}
            >
              <span className="text-lg font-semibold text-gray-800 font-poppins">
                Rank {item.rank}{item.isTied ? " (Tied)" : ""}
              </span>
              <span className="text-lg font-semibold text-gray-900 font-poppins">
                {item.player} - {item.points} points
              </span>
            </div>
          ))}
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
            onClick={onSave}
            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors font-poppins"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TiedPositionsModal;