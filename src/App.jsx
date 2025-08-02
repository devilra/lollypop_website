import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./service/Service";
import Navbar from "./components/Navbar";
import ScrollHighlightComponent from "./pages/Scroll";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        {/* <Route path="/scroll" element={<ScrollHighlightComponent />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
