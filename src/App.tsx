import { Routes, Route } from "react-router-dom";
import LoginScreen from "./modules/login";
import HomeScreen  from "./modules/home";
import ErrorPage from "./modules/errorPage/screen/ErrorPageScreen";
import NewsPage from "./modules/newsPage/screen/NewsScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/news/:id" element={<NewsPage/>} />
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  );
}

export default App;
