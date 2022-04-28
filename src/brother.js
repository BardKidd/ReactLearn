import React from "react";

class Brother extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeling: "?",
      expectAmount: 40,
    };
    this.setMyFeeling = this.setMyFeeling.bind(this);
  }

  setMyFeeling() {
    if (this.props.money < this.state.expectAmount) {
      this.setState({
        feeling: "不能接受",
      });
    } else {
      this.setState({
        feeling: "可以接受",
      });
    }
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps.money, this.props.money);
    if (prevProps.money !== this.props.money) {
      this.setMyFeeling();
    }
  }

  render() {
    return (
      <div>
        我是兒子，我拿到 {this.props.money} 元，我現在 {this.state.feeling}。
      </div>
    );
  }
}

export default Brother;
