import React from "react";
import FunctionContextC from "./FunctionContextC";
import { ThemeProvider } from "./ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <FunctionContextC />
    </ThemeProvider>
  );
}

export default App;
