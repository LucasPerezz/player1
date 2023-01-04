import "./App.css";
import "semantic-ui-css/semantic.min.css";
import GamesContainer from "./components/GamesContainer/GamesContainer";
import Home from './views/Home/Home.jsx'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import GameDetail from "./components/GameDetail/GameDetail";
// import NavbarUI from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:genre" element={<GamesContainer />} />
          <Route path="/:genre/:id" element={<GameDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
