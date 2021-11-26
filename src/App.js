import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Establishment from "./Pages/Establishment";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/establishment/:id" element={<Establishment />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
