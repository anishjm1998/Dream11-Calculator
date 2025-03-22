import React, { useState } from "react";
import { getTotalPoints, getParticipationPoints } from "../services/pointsService";
import TiedPositionsModal from "./TiedPositionsModal";

const PositionModal = ({ match, onSave, onClose }) => {
  const predefinedPlayers = ["Anish", "Supriyam", "Shashwata", "Aron", "Ashwin", "Akash", "Indrajit"];
  const [rankings, setRankings] = useState(Array(7).fill(""));
  const [isAbandoned, setIsAbandoned] = useState(false);
  const [isTiedModalOpen, setIsTiedModalOpen] = useState(false);
  const [tiedPosition, setTiedPosition] = useState(null);
  const [updatedRankings, setUpdatedRankings] = useState([]);

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
      // Check if there's a tied position
      if (tiedPosition) {
        // Find the players who are tied
        const playerAtTiedPosition = rankings[tiedPosition - 1];
        const tiedWithPlayer = rankings.find((player, index) => 
          index !== tiedPosition - 1 && 
          player === updatedRankings[tiedPosition]
        );
        
        // Create results with tied positions having the same points
        results = rankings.map((player, index) => {
          // Both tied players get points for the better position
          if (player === playerAtTiedPosition || player === tiedWithPlayer) {
            return {
              name: player,
              position: tiedPosition,
              points: getTotalPoints(tiedPosition),
              tied: true
            };
          }
          
          // Determine the actual display position for non-tied players
          let displayPosition = index + 1;
          if (tiedPosition && index >= tiedPosition) {
            // After the tied position, adjust the display position
            displayPosition = index;
          }
          
          return {
            name: player,
            position: displayPosition,
            points: getTotalPoints(displayPosition),
          };
        });
      } else {
        // No tied positions, just use the rankings as is
        results = rankings.map((player, index) => ({
          name: player,
          position: index + 1,
          points: getTotalPoints(index + 1),
        }));
      }
    }

    onSave(results);
    onClose();
  };

  const handleTiedPositions = () => {
    const tiedPos = parseInt(prompt("Enter the tied position (e.g., 1, 2, etc.):"));
    if (tiedPos && tiedPos > 0 && tiedPos < rankings.length) {
      // Create a new array with modified rankings
      const newRankings = [...rankings];
      
      // First, make sure both positions have players assigned
      if (!newRankings[tiedPos - 1] || !newRankings[tiedPos]) {
        alert("Both positions must have players assigned to create a tie!");
        return;
      }
      
      // Store the tied position for the modal
      setTiedPosition(tiedPos);
      
      // Create updated rankings for modal preview
      setUpdatedRankings(newRankings);
      setIsTiedModalOpen(true);
    } else {
      alert("Invalid position entered! Position must be between 1 and " + (rankings.length - 1));
    }
  };

  const handleConfirmTiedPositions = () => {
    // Here we save the tied positions directly to the leaderboard
    // and close both modals
    const playerAtTiedPosition = updatedRankings[tiedPosition - 1];
    const tiedWithPlayer = updatedRankings[tiedPosition];
    
    // Create results with tied positions
    let results;
    if (isAbandoned) {
      results = predefinedPlayers.map((player) => ({
        name: player,
        points: getParticipationPoints(),
      }));
    } else {
      results = [];
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
        
        results.push({
          name: player,
          position: displayRank,
          points: isTied ? getTotalPoints(tiedPosition) : getTotalPoints(currentRank),
          tied: isTied
        });
        
        if (!skipNextIncrement) {
          currentRank++;
        }
      });
    }
    
    // Save and close both modals
    onSave(results);
    setIsTiedModalOpen(false);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg w-[600px] mx-auto">
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

      {/* Tied Positions Modal */}
      <TiedPositionsModal
        isOpen={isTiedModalOpen}
        onClose={() => setIsTiedModalOpen(false)}
        tiedPosition={tiedPosition}
        updatedRankings={updatedRankings}
        onSave={handleConfirmTiedPositions}
      />
    </>
  );
};

export default PositionModal;