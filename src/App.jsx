import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Navbar from "./components/layots/navbar/Navbar";
import Footer from "./components/layots/footer/Footer";
import Sport from "./components/pages/sport/Sport";
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    
    </div>
  );
}

export default App;
