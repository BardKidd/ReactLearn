import React, { useEffect } from "react";

const SonTemplate = (props) => {
  const [feeling, setFeeling] = React.useState("?");
  const [expectAmount] = React.useState(40);

  useEffect(() => {
    if (props.money < expectAmount) {
      setFeeling("不能接受");
    } else {
      setFeeling("可以接受");
    }
  }, [props.money]);

  return (
    <div>
      我是兒子，我拿到 {props.money} 元，我現在 {feeling}。
    </div>
  );
};

function Son(props) {
  return <SonTemplate money={props.money} argue={props.argue}></SonTemplate>;
}

export default Son;
