export const calculatePoints = (position) => {
  const pointsMap = {
    1: 10,
    2: 8,
    3: 6,  
    4: 4,  
    5: 3,  
    6: 2,  
    7: 1,  
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