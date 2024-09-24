import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import { Sun, Moon } from "lucide-react";

const Theme = () => {
  return (
    <label input type="checkbox">
      <Sun className="sun" />
      <Moon className="moon" />
      <Navbar />
      <span className="toggle"></span>
      <span className="animatebg"></span>
    </label>
  );
};

export default Theme;
