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
  let skipNextIncrement = false;

  updatedRankings.forEach((player, index) => {
    // Determine if this player is in a tied position
    const isTied = (index === tiedPosition - 1 || index === tiedPosition) && 
                  (player === playerAtTiedPosition || player === tiedWithPlayer);
    
    // For display purposes, both tied players should show the same rank
    const displayRank = skipNextIncrement ? currentRank - 1 : currentRank;
    
    // If this is the first tied player, don't increment rank for the next player
    if (isTied && index === tiedPosition - 1) {
      skipNextIncrement = true;
    } else if (index > tiedPosition) {
      // After the tied players, resume normal rank incrementation
      skipNextIncrement = false;
    }
    
    displayRankings.push({
      player,
      rank: displayRank,
      isTied,
      // Both tied players get the same points (the points for the lower/better position)
      points: isTied ? getTotalPoints(tiedPosition) : getTotalPoints(currentRank)
    });
    
    if (!skipNextIncrement) {
      currentRank++;
    }
  });

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