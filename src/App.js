import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cover from "./Components/Cover";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/establishment" element={<Cover />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
