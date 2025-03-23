import React from "react";

const teamColors = {
  CSK: "bg-yellow-200 border-yellow-600",
  KKR: "bg-gray-200 border-gray-800",
  RCB: "bg-red-200 border-red-600",
  PBKS: "bg-pink-200 border-pink-600",
  DC: "bg-lime-200 border-lime-600",
  MI: "bg-blue-200 border-blue-600",
  LSG: "bg-cyan-200 border-cyan-600",
  GT: "bg-teal-200 border-teal-600",
  SRH: "bg-orange-200 border-orange-600",
  RR: "bg-purple-200 border-purple-600",
};

const FixtureCard = ({ fixture, onSave, isCompleted, onEnterRankings, onViewResults }) => {
  const homeTeam = fixture.teams.split(" vs ")[0];
  const cardColor = teamColors[homeTeam] || "bg-gray-200 border-gray-600";

  return (
    <div
      className={`p-6 rounded-2xl shadow-lg border-2 ${cardColor} ${
        isCompleted ? "opacity-70" : "hover:shadow-xl hover:scale-105"
      } transition-all duration-300 cursor-pointer`}
      onClick={isCompleted ? onViewResults : undefined} // Trigger onViewResults if completed
    >
      <h3 className="text-xl font-bold mb-2 text-gray-900 font-poppins">Match {fixture.id}</h3>
      <h3 className="text-lg mb-4 text-gray-800 font-poppins">{fixture.teams}</h3>
      <p className="text-sm text-gray-700 font-poppins">
        {fixture.date} | {fixture.time}
      </p>
      <p className="text-sm text-gray-700 font-poppins">{fixture.location}</p>

      {!isCompleted ? (
        <button
          onClick={onEnterRankings}
          className={`mt-4 px-6 py-2 bg-transparent border-2 ${cardColor.replace("bg-", "border-")} text-gray-900 rounded-full hover:bg-opacity-20 hover:scale-105 transition duration-300 font-poppins`}
        >
          Enter Rankings
        </button>
      ) : (
        <p className="mt-4 text-green-600 font-semibold font-poppins">Results Saved</p>
      )}
    </div>
  );
};

export default FixtureCard;