import react from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Anime from "./components/Anime";
import AnimeDetail from "./components/AnimeDetail";
import "./Global.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/anime/:id" element={<AnimeDetail />} />
          <Route path="/anime" element={<Anime />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
