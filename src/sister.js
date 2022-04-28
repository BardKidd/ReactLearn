import React from "react";

class Sister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeling: "bad",
    };
    this.argueFor70 = this.argueFor70.bind(this);
  }

  argueFor70() {
    this.props.argue("sister", 70);
  }

  render() {
    return (
      <div>
        我是女兒，我拿到{this.props.money}元
        <button
          style={{
            display: "block",
          }}
          onClick={this.argueFor70}
        >
          給我70啦= =
        </button>
      </div>
    );
  }
}

export default Sister;
