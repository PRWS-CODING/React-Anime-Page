import react from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import "./Global.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
