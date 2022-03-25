import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function incriment() {
    setCount(count + 1);
  }

  function decriment() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={incriment}>Incriment</button>
      <button onClick={decriment}>Decriment</button>
    </div>
  );
};

export default Counter;
