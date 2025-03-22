import React, { useState } from "react";
import FixtureCard from "../components/FixtureCard";
import { Link } from "react-router-dom";
import PositionModal from "../components/PositionModal"; 

const FixturesScreen = () => {
  const [fixtures] = useState([
    { id: 1, date: "March 22, 2025", time: "7:30 PM", location: "Kolkata", teams: "KKR vs RCB" },
    { id: 2, date: "March 23, 2025", time: "3:30 PM", location: "Hyderabad", teams: "SRH vs RR" },
    { id: 3, date: "March 23, 2025", time: "7:30 PM", location: "Chennai", teams: "CSK vs MI" },
    { id: 4, date: "March 24, 2025", time: "7:30 PM", location: "Visakhapatnam", teams: "DC vs LSG" },
    { id: 5, date: "March 25, 2025", time: "7:30 PM", location: "Ahmedabad", teams: "GT vs PBKS" },
    { id: 6, date: "March 26, 2025", time: "7:30 PM", location: "Guwahati", teams: "RR vs KKR" },
    { id: 7, date: "March 27, 2025", time: "7:30 PM", location: "Hyderabad", teams: "SRH vs LSG" },
    { id: 8, date: "March 28, 2025", time: "7:30 PM", location: "Chennai", teams: "CSK vs RCB" },
    { id: 9, date: "March 29, 2025", time: "7:30 PM", location: "Ahmedabad", teams: "GT vs MI" },
    { id: 10, date: "March 30, 2025", time: "3:30 PM", location: "Visakhapatnam", teams: "DC vs SRH" },
    { id: 11, date: "March 30, 2025", time: "7:30 PM", location: "Guwahati", teams: "RR vs CSK" },
    { id: 12, date: "March 31, 2025", time: "7:30 PM", location: "Mumbai", teams: "MI vs KKR" },
    { id: 13, date: "April 1, 2025", time: "7:30 PM", location: "Lucknow", teams: "LSG vs PBKS" },
    { id: 14, date: "April 2, 2025", time: "7:30 PM", location: "Bengaluru", teams: "RCB vs GT" },
    { id: 15, date: "April 3, 2025", time: "7:30 PM", location: "Kolkata", teams: "KKR vs SRH" },
    { id: 16, date: "April 4, 2025", time: "7:30 PM", location: "Lucknow", teams: "LSG vs MI" },
    { id: 17, date: "April 5, 2025", time: "3:30 PM", location: "Chennai", teams: "CSK vs DC" },
    { id: 18, date: "April 5, 2025", time: "7:30 PM", location: "New Chandigarh", teams: "PBKS vs RR" },
    { id: 19, date: "April 6, 2025", time: "3:30 PM", location: "Kolkata", teams: "KKR vs LSG" },
    { id: 20, date: "April 6, 2025", time: "7:30 PM", location: "Hyderabad", teams: "SRH vs GT" },
    { id: 21, date: "April 7, 2025", time: "7:30 PM", location: "Mumbai", teams: "MI vs RCB" },
    { id: 22, date: "April 8, 2025", time: "7:30 PM", location: "New Chandigarh", teams: "PBKS vs CSK" },
    { id: 23, date: "April 9, 2025", time: "7:30 PM", location: "Ahmedabad", teams: "GT vs RR" },
    { id: 24, date: "April 10, 2025", time: "7:30 PM", location: "Bengaluru", teams: "RCB vs DC" },
    { id: 25, date: "April 11, 2025", time: "7:30 PM", location: "Chennai", teams: "CSK vs KKR" },
    { id: 26, date: "April 12, 2025", time: "3:30 PM", location: "Lucknow", teams: "LSG vs GT" },
    { id: 27, date: "April 12, 2025", time: "7:30 PM", location: "Hyderabad", teams: "SRH vs PBKS" },
    { id: 28, date: "April 13, 2025", time: "3:30 PM", location: "Jaipur", teams: "RR vs RCB" },
    { id: 29, date: "April 13, 2025", time: "7:30 PM", location: "Delhi", teams: "DC vs MI" },
    { id: 30, date: "April 14, 2025", time: "7:30 PM", location: "Lucknow", teams: "LSG vs CSK" },
    { id: 31, date: "April 15, 2025", time: "7:30 PM", location: "New Chandigarh", teams: "PBKS vs KKR" },
    { id: 32, date: "April 16, 2025", time: "7:30 PM", location: "Delhi", teams: "DC vs RR" },
    { id: 33, date: "April 17, 2025", time: "7:30 PM", location: "Mumbai", teams: "MI vs SRH" },
    { id: 34, date: "April 18, 2025", time: "7:30 PM", location: "Bengaluru", teams: "RCB vs PBKS" },
    { id: 35, date: "April 19, 2025", time: "3:30 PM", location: "Ahmedabad", teams: "GT vs DC" },
    { id: 36, date: "April 19, 2025", time: "7:30 PM", location: "Jaipur", teams: "RR vs LSG" },
    { id: 37, date: "April 20, 2025", time: "3:30 PM", location: "New Chandigarh", teams: "PBKS vs RCB" },
    { id: 38, date: "April 20, 2025", time: "7:30 PM", location: "Mumbai", teams: "MI vs CSK" },
    { id: 39, date: "April 21, 2025", time: "7:30 PM", location: "Kolkata", teams: "KKR vs GT" },
    { id: 40, date: "April 22, 2025", time: "7:30 PM", location: "Lucknow", teams: "LSG vs DC" },
    { id: 41, date: "April 23, 2025", time: "7:30 PM", location: "Hyderabad", teams: "SRH vs MI" },
    { id: 42, date: "April 24, 2025", time: "7:30 PM", location: "Bengaluru", teams: "RCB vs RR" },
    { id: 43, date: "April 25, 2025", time: "7:30 PM", location: "Chennai", teams: "CSK vs SRH" },
    { id: 44, date: "April 26, 2025", time: "7:30 PM", location: "Kolkata", teams: "KKR vs PBKS" },
    { id: 45, date: "April 27, 2025", time: "3:30 PM", location: "Mumbai", teams: "MI vs LSG" },
    { id: 46, date: "April 27, 2025", time: "7:30 PM", location: "Delhi", teams: "DC vs RCB" },
    { id: 47, date: "April 28, 2025", time: "7:30 PM", location: "Jaipur", teams: "RR vs GT" },
    { id: 48, date: "April 29, 2025", time: "7:30 PM", location: "Delhi", teams: "DC vs KKR" },
    { id: 49, date: "April 30, 2025", time: "7:30 PM", location: "Chennai", teams: "CSK vs PBKS" },
    { id: 50, date: "May 1, 2025", time: "7:30 PM", location: "Jaipur", teams: "RR vs MI" },
    { id: 51, date: "May 2, 2025", time: "7:30 PM", location: "Ahmedabad", teams: "GT vs SRH" },
    { id: 52, date: "May 3, 2025", time: "7:30 PM", location: "Bengaluru", teams: "RCB vs CSK" },
    { id: 53, date: "May 4, 2025", time: "3:30 PM", location: "Kolkata", teams: "KKR vs RR" },
    { id: 54, date: "May 4, 2025", time: "7:30 PM", location: "Dharamsala", teams: "PBKS vs LSG" },
    { id: 55, date: "May 5, 2025", time: "7:30 PM", location: "Hyderabad", teams: "SRH vs DC" },
    { id: 56, date: "May 6, 2025", time: "7:30 PM", location: "Mumbai", teams: "MI vs GT" },
    { id: 57, date: "May 7, 2025", time: "7:30 PM", location: "Kolkata", teams: "KKR vs CSK" },
    { id: 58, date: "May 8, 2025", time: "7:30 PM", location: "Dharamsala", teams: "PBKS vs DC" },
    { id: 59, date: "May 9, 2025", time: "7:30 PM", location: "Lucknow", teams: "LSG vs RCB" },
    { id: 60, date: "May 10, 2025", time: "7:30 PM", location: "Hyderabad", teams: "SRH vs KKR" },
    { id: 61, date: "May 11, 2025", time: "3:30 PM", location: "Chennai", teams: "CSK vs RR" },
    { id: 62, date: "May 12, 2025", time: "7:30 PM", location: "Delhi", teams: "DC vs LSG" },
    { id: 63, date: "May 13, 2025", time: "7:30 PM", location: "Bengaluru", teams: "RCB vs MI" },
    { id: 64, date: "May 14, 2025", time: "7:30 PM", location: "Ahmedabad", teams: "GT vs PBKS" },
    { id: 65, date: "May 15, 2025", time: "7:30 PM", location: "Mumbai", teams: "MI vs RR" },
    { id: 66, date: "May 16, 2025", time: "7:30 PM", location: "Delhi", teams: "DC vs SRH" },
    { id: 67, date: "May 17, 2025", time: "7:30 PM", location: "Chennai", teams: "CSK vs GT" },
    { id: 68, date: "May 18, 2025", time: "7:30 PM", location: "Hyderabad", teams: "SRH vs PBKS" },
    { id: 69, date: "May 19, 2025", time: "3:30 PM", location: "Bengaluru", teams: "RCB vs LSG" },
    { id: 70, date: "May 20, 2025", time: "7:30 PM", location: "Mumbai", teams: "MI vs DC" },
  ]);

  const [results, setResults] = useState(() => {
    const savedResults = localStorage.getItem("fixtureResults");
    return savedResults ? JSON.parse(savedResults) : {};
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFixture, setSelectedFixture] = useState(null);

  const handleSave = (fixtureId, playerResults) => {
    const newResults = { ...results, [fixtureId]: playerResults };
    setResults(newResults);
    localStorage.setItem("fixtureResults", JSON.stringify(newResults));
  };

  const resetScores = () => {
    localStorage.removeItem("fixtureResults");
    window.location.reload();
  };

  const handleOpenModal = (fixture) => {
    setSelectedFixture(fixture);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFixture(null);
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <Link
          to="/"
          className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-poppins"
        >
          Go Back
        </Link>
        <button
          onClick={resetScores}
          className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all font-poppins"
        >
          Reset Scores
        </button>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 font-poppins">Fixtures</h1>

      {/* Check Leaderboard Button */}
      <div className="flex justify-center mb-8">
        <Link
          to="/leaderboard"
          className="px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-all font-poppins"
        >
          Check Leaderboard
        </Link>
      </div>

      {/* Fixtures Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fixtures.map((fixture) => (
          <FixtureCard
            key={fixture.id}
            fixture={fixture}
            onSave={(results) => handleSave(fixture.id, results)}
            isCompleted={!!results[fixture.id]}
            onEnterRankings={() => handleOpenModal(fixture)} // Pass a callback to open the modal
          />
        ))}
      </div>

      {/* Position Modal */}
      {isModalOpen && selectedFixture && (
        <PositionModal
          match={selectedFixture}
          onSave={(results) => {
            handleSave(selectedFixture.id, results);
            handleCloseModal();
          }}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default FixturesScreen;