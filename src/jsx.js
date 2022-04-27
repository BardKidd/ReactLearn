import React from "react";

// const name = "Shima Rin";
// function clickMe() {
//   console.log("點我啦");
// }
export const CreateBtn = () => {
  let output = [];
  const arr = Array(5).fill(null);
  arr.forEach((btn, index) => {
    output.push(
      <button
        key={index}
        type="button"
        onClick={() => {
          console.log("箭頭");
        }}
      >
        第{index}個按鈕
      </button>
    );
  });
  return output;
};

export const JSXAPP = (props) => {
  return <p>我想說{props.children}喔喔喔</p>;
};

class ClassJSX extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       name: "芝麻凜",
  //     };
  //   }
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default ClassJSX;
