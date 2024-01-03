import { useState } from "react";
import { memoise, Data, deBounce } from "./function";
import "./App.css";

function App() {
  const [exist, setExist] = useState("");
  const [result, setResult] = useState<number>(0);
  const [list, setList] = useState<Data[]>([]);
  // const toActRef = useRef<(() => void) | null>(null);

  // function toMemoise(event: React.ChangeEvent<HTMLInputElement>) {
  //   const value: number = Number(event.target.value);
  //   toActRef.current = deBounce(() => {
  //     const valueFrom = memoise(value, "square");
  //     if (valueFrom && valueFrom.length > 0) {
  //       setExist(String(valueFrom[0]));
  //       setResult(Number(valueFrom[1]));
  //       if (Array.isArray(valueFrom[2])) {
  //         setList(valueFrom[2]);
  //       }
  //     }
  //   }, 5000);

  //   toActRef.current();
  // }

  const toDeBounce = deBounce((valueFrom: any) => {
    if (valueFrom && valueFrom.length > 0) {
      setExist(String(valueFrom[0]));
      setResult(Number(valueFrom[1]));
      if (Array.isArray(valueFrom[2])) {
        setList(valueFrom[2]);
      }
    }
  }, 2000);

  const toMemoise = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = Number(event.target.value);
    const valueFrom = memoise(value, "square");
    toDeBounce(valueFrom);
  };

  return (
    <>
      <h1>Comprueba la función Momoise!!</h1>
      <p>Para generar un un resultado si no esta almacenado</p>
      <div className="card">
        <input type="number" name="value" onChange={toMemoise} />
        <select>
          <option>Square</option>
          <option>Cube</option>
        </select>
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
