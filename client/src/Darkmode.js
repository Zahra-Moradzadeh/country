import React, { useState, useEffect, } from "react";
import { BsMoon } from "react-icons/bs";
import "./darkMode.css";
import { Button } from "react-bootstrap/";


function Darkmode() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`Darkmode ${theme}`}>
      <Button onClick={toggleTheme} variant="outline-dark" style={{border:"none"}}>
        <BsMoon />
        <span> </span>
        <span style={{ fontWeight: "bold", fontSize: 17 }}> Dark Mode</span>
      </Button>
    </div>
  );
}
export default Darkmode;
