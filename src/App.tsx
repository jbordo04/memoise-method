import { useState } from "react";
import { memoise, Data } from "./function";
import "./App.css";

function App() {
  const [exist, setExist] = useState("");
  const [result, setResult] = useState<number>(0);
  const [list, setList] = useState<Data[]>([]);

  function toMemoise(event: React.ChangeEvent<HTMLInputElement>) {
    const value: number = Number(event.target.value);
    const valueFrom = memoise(value, "square");

    if (valueFrom && valueFrom.length > 0) {
      setExist(String(valueFrom[0]));
      setResult(Number(valueFrom[1]));
      if (Array.isArray(valueFrom[2])) {
        setList(valueFrom[2]);
      }
    }
  }

  return (
    <>
      <h1>Comprueba la función Momoise!!</h1>
      <p>Para generar un un resultado si no esta almacenado</p>
      <div className="card">
        <input type="number" name="value" onChange={toMemoise} />
        <button>Square</button>
        {list.length > 0 && (
          <p>
            {exist} y da {result}
          </p>
        )}
      </div>
      {list.length > 0 && (
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item.key}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
