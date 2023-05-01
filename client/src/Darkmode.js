import React, { useState, useEffect } from "react";
import { BsMoon } from "react-icons/bs";
import "./darkMode.css";

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
      <button onClick={toggleTheme} style={{backgroundColor:"white", border:"none" ,color:"black",fontSize:20}}>
        <BsMoon />
        <span> </span>
        <span style={{ fontWeight: "bold", fontSize: 17 }}> Dark Mode</span>
      </button>
    </div>
  );
}
export default Darkmode;
