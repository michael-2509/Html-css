import React, { useState } from "react";

const Counter = ({ count, greetings }) => {
  const [item, setItem] = useState(count);

  const incrementHandler = () => {
    setItem(item + 1);
  };

  const decrementHandler = () => {
    setItem(item - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>{item}</p>
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
    </div>
  );
};

export default Counter;
