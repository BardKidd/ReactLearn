import React from "react";
import Sister from "./sister";
import Brother from "./brother";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyForBrother: 60,
      moneyForSister: 40,
    };
    this.allocateMoney = this.allocateMoney.bind(this);
    this.changeBrotherAllocate = this.changeBrotherAllocate.bind(this);
    this.changeSisterAllocate = this.changeSisterAllocate.bind(this);
  }

  allocateMoney(target, amount) {
    if (target === "brother") {
      this.setState({ moneyForBrother: amount });
    } else {
      this.setState({
        moneyForSister: amount,
        moneyForBrother: 100 - amount,
      });
    }
  }

  changeBrotherAllocate(e) {
    const money = Number(e.target.value);
    this.setState({
      moneyForBrother: money,
      moneyForSister: 100 - money,
    });
  }

  changeSisterAllocate(e) {
    const money = Number(e.target.value);
    this.setState({
      moneyForBrother: 100 - money,
      moneyForSister: money,
    });
  }

  render() {
    return (
      <div>
        <div>
          我要給我兒子:
          <input
            type="number"
            value={this.state.moneyForBrother}
            onInput={this.changeBrotherAllocate}
          />
        </div>
        <div>
          我要給我女兒:
          <input
            type="number"
            value={this.state.moneyForSister}
            onInput={this.changeSisterAllocate}
          />
        </div>
        <Sister
          money={this.state.moneyForSister}
          argue={this.allocateMoney}
        ></Sister>
        <Brother
          money={this.state.moneyForBrother}
          argue={this.allocateMoney}
        ></Brother>
      </div>
    );
  }
}

export default Parent;
