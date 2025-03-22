// src/services/pointsService.js

export const calculatePoints = (position) => {
  const pointsMap = {
    1: 10,
    2: 7,
    3: 5,
    4: 3,
    5: 2,
    6: 1,
    7: 0,
  };
  return pointsMap[position] || 0;
};

export const getParticipationPoints = () => 2;

export const getTotalPoints = (position) => {
  return calculatePoints(position) + getParticipationPoints();
};

const handleTiedPositions = () => {
  const tiedPosition = parseInt(prompt("Enter the tied position (e.g., 1, 2, etc.):"));
  if (tiedPosition && tiedPosition > 0 && tiedPosition <= rankings.length) {
    const newRankings = [...rankings];

    // Duplicate the tied position
    const tiedPlayer = newRankings[tiedPosition - 1]; // Get the player at the tied position
    newRankings.splice(tiedPosition - 1, 0, tiedPlayer); // Insert the duplicate at the tied position

    // Remove the position under it (e.g., if tied at 4th, remove 5th)
    if (newRankings.length > 7) {
      newRankings.splice(tiedPosition + 1, 1); // Remove the next position
    }

    setRankings(newRankings);
  } else {
    alert("Invalid position entered!");
  }
};

export const handleAbandonedMatch = (players) => {
  return players.map((player) => ({
    ...player,
    points: getParticipationPoints(),
  }));
};
