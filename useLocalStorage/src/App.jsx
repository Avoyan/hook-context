import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");

  const [name, {setItem, removeItem}] = useLocalStorage("name", "");

  const handelInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOKButtonClick = () => {
    setItem(inputValue);
  }

  const handleXButtonClick = () => {
    removeItem();
  }

  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={handelInputChange}/>
      <button onClick={handleOKButtonClick}>OK</button>
      <button onClick={handleXButtonClick}>X</button>
      {name && <div>Hi {name} !!!</div>}
    </div>
  )
}

export default App
