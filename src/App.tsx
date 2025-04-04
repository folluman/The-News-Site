import { Routes, Route } from "react-router-dom";
import LoginScreen from "./modules/login";
import HomeScreen  from "./modules/home/HomeScreen";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/" element={<LoginScreen />} />
    </Routes>
  );
}

export default App;
