import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./service/Service";
import Process from "./process/Process";
import ProjectEnquiry from "./project-Enquiry/Project";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        {/* <Route path="/scroll" element={<ScrollHighlightComponent />} /> */}
        <Route path="/process" element={<Process />} />
        <Route path="/project-enquiry" element={<ProjectEnquiry />} />
      </Routes>
    </Router>
  );
};

export default App;
