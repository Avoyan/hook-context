import { useState } from "react";

const useLocalStorage = (keyName, initialValue) => {
  const [state, setState] = useState(() => {
    const item = localStorage.getItem(keyName);
    return item ? item : initialValue;
  });

  const setItem = (value) => {
    setState(value);
    localStorage.setItem(keyName, value);
  }

  const getItem = () => {
    return localStorage.getItem(keyName);
  }

  const removeItem = () => {
    setState(initialValue);
    localStorage.removeItem(keyName);
  }

  const clear = () => {
    setState(initialValue);
    localStorage.clear();
  }

  const key = (index) => {
    return localStorage.key(index);
  }

  return [
    state,
    {setItem, getItem, removeItem, clear, key}
  ];
};

export default useLocalStorage;