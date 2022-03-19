import './App.css'
import useFetch from './hooks/useFetch'

function App() {
  const [name, callFetch] = useFetch("");

  const handleButtonClick = () => {
    callFetch("https://namey.muffinlabs.com/name.json?count=1&with_surname=false&frequency=all");
  }

  return (
    <div className="App">
      <button onClick={handleButtonClick}>Say Hi</button>
      {name && <div>Hi {name} !!!</div>}
    </div>
  )
}

export default App
