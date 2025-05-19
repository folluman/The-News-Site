import { Routes, Route } from "react-router-dom";
import LoginScreen from "./modules/login";
import HomeScreen  from "./modules/home";
import ErrorPage from "./modules/errorPage/screen/ErrorPageScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  );
}

export default App;
