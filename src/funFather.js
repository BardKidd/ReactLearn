import React from "react";
import Daughter from "./funDaughter";
import Son from "./funSon";

const ParentTemplate = (props) => {
  const [moneyForSon, setMoneyForSon] = React.useState(60);
  const [moneyForDaughter, setMoneyForDaughter] = React.useState(40);

  const allocateMoney = (target, amount) => {
    if (target === "son") {
      setMoneyForSon(amount);
    } else {
      setMoneyForDaughter(amount);
      setMoneyForSon(100 - amount);
    }
  };

  const changeMoney = (e) => {
    const target = e.target.id;
    const getMoney = Number(e.target.value);
    if (target === "son") {
      setMoneyForDaughter(100 - getMoney);
      setMoneyForSon(getMoney);
    } else {
      setMoneyForDaughter(getMoney);
      setMoneyForSon(100 - getMoney);
    }
  };

  return (
    <div>
      <div>
        我要給我兒子:
        <input
          type="number"
          id="son"
          value={moneyForSon}
          onInput={changeMoney}
        />
      </div>
      <div>
        我要給我女兒:
        <input
          type="number"
          id="daughter"
          value={moneyForDaughter}
          onInput={changeMoney}
        />
      </div>
      <Daughter money={moneyForDaughter} argue={allocateMoney}></Daughter>
      <Son money={moneyForSon} argue={allocateMoney}></Son>
    </div>
  );
};

function FunParent() {
  return <ParentTemplate></ParentTemplate>;
}

export default FunParent;
