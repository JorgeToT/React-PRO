import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = (num: number = 1): void => {
    setCounter(counter + num);
  };

  const decrement = (num: number = 1): void => {
    setCounter(counter - num);
  };

  return (
    <div className="my-4">
      <span>Valor: {counter}</span>
      <br />
      <button onClick={() => increment()} className="btn btn-outline-primary mt-2 mx-2">
        +1
      </button>
      <button onClick={() => increment(2)} className="btn btn-outline-primary mt-2 mx-2">
        +2
      </button>
      <button onClick={() => setCounter(0)} className="btn btn-outline-danger mt-2 mx-2">
        Reset
      </button>
      <button onClick={() => decrement()} className="btn btn-outline-primary mt-2 mx-2">
        -1
      </button>
      <button onClick={() => decrement(2)} className="btn btn-outline-primary mt-2 mx-2">
        -2
      </button>
    </div>
  );
};
