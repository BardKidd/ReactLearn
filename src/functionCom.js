import React, { Fragment, useEffect, useState } from "react";

const FunctionCom = () => {
  const [waifu, setWaifu] = useState("芝麻凜");
  const [isChange, setIsChange] = useState(false);
  const [obj, setObj] = useState({
    age: 16,
    job: "女子高生",
  });

  console.log(isChange);
  useEffect(() => {
    if (waifu === "芝麻凜") {
      setWaifu("齊藤惠那");
      return () => {
        setWaifu("齋藤惠那不是我婆");
      };
    }
  }, [waifu]);

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
