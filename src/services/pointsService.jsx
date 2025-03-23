export const calculatePoints = (position) => {
  const pointsMap = {
    1: 10, // 🥇 1st Place
    2: 8,  // 🥈 2nd Place
    3: 6,  // 🥉 3rd Place
    4: 4,  // 4th Place
    5: 3,  // 5th Place
    6: 2,  // 6th Place
    7: 1,  // 7th Place
    8: 0,  // 8th Place
  };
  return pointsMap[position] || 0;
};

export const getParticipationPoints = () => 2;

export const getTotalPoints = (position) => {
  return calculatePoints(position) + getParticipationPoints();
};

export const handleAbandonedMatch = (players) => {
  return players.map((player) => ({
    ...player,
    points: getParticipationPoints(),
  }));
};