import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Design from "./Design";
import Development from "./Development";

const Services = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        <li><Link to="design">Design Services</Link></li>
        <li><Link to="development">Development Services</Link></li>
      </ul>

      <Routes>
        <Route path="design" element={<Design />} />
        <Route path="development" element={<Development />} />
      </Routes>
    </div>
  );
};

export default Services;
