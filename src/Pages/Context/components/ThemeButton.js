import React from "react";
import { ThemeContext } from "./AppContext";

// class ThemedButton extends React.Component {
//   static contextType = ThemeContext;
//   render() {
//     return <button>{this.context}</button>;
//   }
// }
const ThemedButton = () => {
  const button = React.useContext(ThemeContext);
  return <button>{button}</button>;
};

// 可使用 this.context
// ThemedButton.contextType = AppContext;

export default ThemedButton;
