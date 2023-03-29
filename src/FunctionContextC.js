import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

export default function FunctionContextC() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyle = {
    backgroundColor: darkTheme ? "black" : "#ccc",
    color: darkTheme ? "#ccc" : "black",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyle}>Function Theme</div>
    </>
  );
}
