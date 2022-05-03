import React from "react";
import ThemedButton from "./components/ThemeButton";
import { ThemeContext } from "./components/AppContext";

function Toolbar() {
  return (
    <div>
      <ThemedButton></ThemedButton>
    </div>
  );
}

class ContextLearn extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar></Toolbar>;
      </ThemeContext.Provider>
    );
  }
}

export default ContextLearn;
