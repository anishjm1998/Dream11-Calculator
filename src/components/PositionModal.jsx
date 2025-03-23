import React, { useState } from "react";
import { getTotalPoints, getParticipationPoints } from "../services/pointsService";
import TiedPositionsModal from "./TiedPositionsModal";

const PositionModal = ({ match, onSave, onClose }) => {
  const predefinedPlayers = [
    "Anish",
    "Supriyam",
    "Shashwata",
    "Aron",
    "Ashwin",
    "Akash",
    "Indrajit",
    "Dipra",
  ];
  const [rankings, setRankings] = useState(Array(8).fill("")); 
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
    const tiedPos = parseInt(prompt("Enter the tied position (e.g., 1, 2, etc.):"));
    if (tiedPos && tiedPos > 0 && tiedPos < rankings.length) {
      if (!rankings[tiedPos - 1] || !rankings[tiedPos]) {
        alert("Both positions must have players assigned to create a tie!");
        return;
      }

      setTiedPosition(tiedPos);
      setUpdatedRankings([...rankings]);
      setIsTiedModalOpen(true);
    } else {
      alert("Invalid position entered! Position must be between 1 and " + (rankings.length - 1));
    }
  };

  const handleConfirmTiedPositions = () => {
    if (!tiedPosition) return;

    const playerAtTiedPosition = updatedRankings[tiedPosition - 1];
    const tiedWithPlayer = updatedRankings[tiedPosition];
    const results = [];

    for (let i = 0; i < tiedPosition - 1; i++) {
      results.push({
        name: updatedRankings[i],
        position: i + 1,
        points: getTotalPoints(i + 1),
      });
    }

    results.push({
      name: playerAtTiedPosition,
      position: tiedPosition,
      points: getTotalPoints(tiedPosition),
      tied: true,
    });

    results.push({
      name: tiedWithPlayer,
      position: tiedPosition,
      points: getTotalPoints(tiedPosition),
      tied: true,
    });

    for (let i = tiedPosition + 1; i < updatedRankings.length; i++) {
      const adjustedPosition = i + 1;
      results.push({
        name: updatedRankings[i],
        position: adjustedPosition,
        points: getTotalPoints(adjustedPosition),
      });
    }

    onSave(results);
    setIsTiedModalOpen(false);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto my-8">
          {/* Modal Header */}
          <div className="sticky top-0 bg-gradient-to-br from-blue-50 to-purple-50 z-10">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 font-poppins">
              Assign Rankings for {match?.teams || "Match"}
            </h3>
          </div>

          {/* Rankings (Dropdowns) */}
          <div className="space-y-4 max-h-[60vh] overflow-y-auto">
            {rankings.map((player, index) => (
              <div key={index} className="flex flex-col space-y-2">
                <span className="text-lg font-semibold text-gray-800 font-poppins">
                  Rank {index + 1} ({getTotalPoints(index + 1)} points)
                </span>
                <select
                  value={player}
                  onChange={(e) => handleRankingChange(index, e.target.value)}
                  className="p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full"
                >
                  <option value="">Select Player</option>
                  {predefinedPlayers.map((playerName) => (
                    <option
                      key={playerName}
                      value={playerName}
                      disabled={rankings.includes(playerName) && playerName !== player}
                    >
                      {playerName}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          {/* Buttons for Tied Positions and Abandoned Match */}
          <div className="mt-8 flex flex-col space-y-4">
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
          <div className="mt-8 flex flex-col space-y-4">
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