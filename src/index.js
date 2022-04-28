import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import "./fetch.css";
// import RandomMeal from "./fetch";
// import ClassJSX, { CreateBtn, JSXAPP } from "./jsx";
// import FunctionCom from "./functionCom";

// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.customerValue}
//       </button>
//     );
//   }
// }

// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.customerValue}
//     </button>
//   );
// }

// class Board extends React.Component {
//   renderSquare(i) {
//     return (
//       <Square
//         customerValue={this.props.squares[i]}
//         onClick={() => this.props.onClick(i)}
//       />
//     );
//   }

//   render() {
//     return (
//       <div>
//         <div className="border-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="border-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="border-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // history: [
      //   {
      //     squares: Array(9).fill(null),
      //   },
      // ],
      // xIsNext: true,
      // stepNumber: 0,
    };
  }

  // handleClick(i) {
  //   const history = this.state.history.slice(0, this.state.stepNumber + 1); // 點擊按鈕後「回到過去」，就必須把「未來」事件刪除。
  //   const current = history[history.length - 1];
  //   const squares = current.squares.slice();
  //   if (calculateWinner(squares) || squares[i]) return;
  //   squares[i] = this.state.xIsNext ? "X" : "O";
  //   this.setState({
  //     history: history.concat([
  //       {
  //         squares: squares,
  //       },
  //     ]),
  //     stepNumber: history.length,
  //     xIsNext: !this.state.xIsNext,
  //   });
  // }

  // jumpTo(step) {
  //   this.setState({
  //     stepNumber: step,
  //     xIsNext: step % 2 === 0, // 不是偶數就為 true
  //   });
  // }

  render() {
    // const history = this.state.history;
    // const current = history[this.state.stepNumber];
    // const winner = calculateWinner(current.squares);

    // // 移動按鈕
    // const moves = history.map((step, move) => {
    //   const desc = move ? `Go to move #${move}` : "Go to game start";
    //   return (
    //     <li key={move}>
    //       <button onClick={() => this.jumpTo(move)}>{desc}</button>
    //     </li>
    //   );
    // });

    // let status = winner
    //   ? `Winner: ${winner}`
    //   : `Next player: ${this.state.xIsNext ? "X" : "O"}`;
    return (
      <Fragment>
        {/* <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <RandomMeal />
          <RandomMeal />
          <RandomMeal />
        </div>
        <div>
          {CreateBtn()}
          <JSXAPP>芝麻凜好香</JSXAPP>

          <ClassJSX></ClassJSX>
        </div>
        <div>
          <FunctionCom></FunctionCom>
        </div> */}
      </Fragment>
    );
  }
}

// 判斷是否有贏家了，在本次教學範例中不是太重要。
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
