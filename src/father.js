import React from "react";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyForBrother: 60,
      moneyForSister: 40,
    };
    this.allocateMoney = this.allocateMoney.bind(this);
  }

  allocateMoney(target, amount) {
    if (target === "brother") {
      this.setState({ moneyForBrother: amount });
    } else {
      this.setState({ moneyForSister: amount });
    }
  }

  render() {
    return <div>123</div>;
  }
}

export default Parent;
