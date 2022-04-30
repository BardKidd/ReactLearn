import React from "react";

const DaughterTemplate = (props) => {
  function argueFor70() {
    props.argue("daughter", 70);
  }

  return (
    <div>
      我是女兒，我拿到{props.money}元
      <button
        style={{
          display: "block",
        }}
        type="button"
        onClick={argueFor70}
      >
        給我70啦= =
      </button>
    </div>
  );
};

function Daughter(props) {
  return (
    <DaughterTemplate
      money={props.money}
      argue={props.argue}
    ></DaughterTemplate>
  );
}

export default Daughter;
