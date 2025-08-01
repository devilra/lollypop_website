import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./service/Service";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </Router>
  );
};

export default App;
