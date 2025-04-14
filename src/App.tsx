import { Routes, Route } from "react-router-dom";
import LoginScreen from "./modules/login";
import HomeScreen  from "./modules/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
  );
}

export default App;
