import React, { Fragment, useState } from "react";

const FunctionCom = () => {
  const [waifu, setWaifu] = useState("芝麻凜");
  const [isChange, setIsChange] = useState(false);
  const [obj, setObj] = useState({
    age: 16,
    job: "女子高生",
  });

  return (
    <Fragment>
      <button
        onClick={() => {
          setWaifu("各務原撫子");
          setIsChange(undefined);
          setObj({
            ...obj,
            age: 17,
          });
        }}
      >
        我婆轉換
      </button>
      <h1>我婆, {waifu}！ function component</h1>
    </Fragment>
  );
};

export default FunctionCom;

// class ClassJSX extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       waifu: "芝麻凜",
//       isChange: false,
//       obj: {
//         age: 16,
//         job: "女子高生",
//       },
//     };
//     this.changeName = this.changeName.bind(this);
//   }

//   changeName() {
//     this.setState(
//       {
//         waifu: "各務原撫子",
//         obj: {
//           ...this.state.obj,
//           age: 17,
//         },
//       },
//       () => {
//         console.log("obj", this.state.obj);
//       }
//     );
//     this.setState({
//       isChange: undefined,
//     });
//   }
//   render() {
//     return (
//       <Fragment>
//         <button onClick={this.changeName}>我婆轉換</button>
//         <h1>我婆, {this.state.waifu}！</h1>
//       </Fragment>
//     );
//   }
// }
