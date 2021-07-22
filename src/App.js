import { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState(0);
  let [msg, setMsg] = useState("No");

  const valueInc = () => {
    setState(state + 1);
    setMsg((msg = ""));
  };

  const valueRed = () => {
    if (state === 0) {
      setMsg((msg = "No! You can't go below 0"));
    } else {
      setState(state - 1);
      setMsg((msg = ""));
    }
  };

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={valueInc}>+</button>
      <button onClick={valueRed}>-</button>
      <span>{msg}</span>
    </div>
  );
}
