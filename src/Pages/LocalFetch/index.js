import { useEffect, useState } from "react";
import { API_GET_DATA } from "../../global/constants";

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  setData(data);
}

async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
}

const LocalFetch = () => {
  const [waifu, setData] = useState({});

  useEffect(() => {
    fetchSetData(waifu);
  }, [waifu]);

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
