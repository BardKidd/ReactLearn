import React, { Fragment } from "react";

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
  constructor(props) {
    super(props);
    this.state = {
      waifu: "芝麻凜",
      isChange: false,
      obj: {
        age: 16,
        job: "女子高生",
      },
    };
    this.changeName = this.changeName.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("props", props);
    console.log("state", state);
    if (state.waifu === "芝麻凜") {
      return (state.waifu = "各務原撫子");
    }
  }

  changeName() {
    this.setState(
      {
        waifu: "各務原撫子",
        obj: {
          ...this.state.obj,
          age: 17,
        },
      },
      () => {
        console.log("obj", this.state.obj);
      }
    );
    this.setState({
      isChange: undefined,
    });
  }
  render() {
    return (
      <Fragment>
        <button onClick={this.changeName}>我婆轉換</button>
        <h1>我婆, {this.state.waifu}！</h1>
      </Fragment>
    );
  }
}

export default ClassJSX;
