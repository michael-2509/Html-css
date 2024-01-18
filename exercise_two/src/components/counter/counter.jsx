import React, { useState } from "react";
import Button from "../button/button";
import Toast from "../button/toast";

const Counter = ({ count, greetings }) => {
  const [item, setItem] = useState(0);

  const incrementHandler = () => {
    setItem(item + 1);
  };

  const decrementHandler = () => {
    setItem(item - 1);
  };
  console.log(item);
  return (
    <div>
      <h2>Counter</h2>
      <p>{item}</p>
      <Button add={incrementHandler} remove={decrementHandler} />
      <Toast item={item} />
    </div>
  );
};

export default Counter;
