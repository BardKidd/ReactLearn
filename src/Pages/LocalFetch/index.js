import { useEffect, useState } from "react";
import { API_GET_DATA } from "../../global/constants";

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  setData(data);
}

const LocalFetch = () => {
  const [waifu, setData] = useState([]);
  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <div>
      <p>
        我老婆是{waifu.title}，今年{waifu.age}歲
      </p>
    </div>
  );
};

export default LocalFetch;
