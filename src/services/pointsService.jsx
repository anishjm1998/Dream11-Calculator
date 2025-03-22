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

export const handleTiedPositions = (players, tiedPositions) => {
  const points = tiedPositions.reduce((sum, pos) => sum + calculatePoints(pos), 0) / tiedPositions.length;
  return players.map((player) => ({
    ...player,
    points: points + getParticipationPoints(),
  }));
};

export const handleAbandonedMatch = (players) => {
  return players.map((player) => ({
    ...player,
    points: getParticipationPoints(),
  }));
};
