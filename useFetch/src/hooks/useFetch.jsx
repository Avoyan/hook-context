import { useState } from "react";

const useFetch = (initialValue) => {
  const [data, setData] = useState(initialValue);

  const handleFetchCall = (url, init) => {
    fetch(url, init)
      .then(res => res.json())
      .then(data => setData(data));
  }

  return [
    data,
    handleFetchCall
  ];
};

export default useFetch;