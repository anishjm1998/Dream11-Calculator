import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import FixturesScreen from "./screens/FixturesScreen";
import LeaderboardScreen from "./screens/LeaderboardScreen";
import PointsSystemScreen from "./screens/PointsSystemScreen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/fixtures" element={<FixturesScreen />} />
        <Route path="/leaderboard" element={<LeaderboardScreen />} />
        <Route path="/points-system" element={<PointsSystemScreen />} />
      </Routes>
    </Router>
  );
};

export default App;