import React, { useState } from "react";

const Learning = () => {
  const [age, setAge] = useState(7);
  const [car, setCar] = useState({ make: "lamborgini", year: "2024" });
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState();
  const [bank, setBank] = useState("");
  const [loading, setLoading] = useState(false);

  const incrementHandler = () => {
    setAge(age + 1);
    // alert(`hello i am ${age} year's old`);
    setTitle("Learning react in three weeks with elijah");
    setCar();
  };

  const decrementHandler = () => {
    setAge(age - 1);
    setTitle("");
  };

  const showHandler = () => {
    setShow(!show);
  };

  const bankNameHandler = () => {
    setBank("Wema Bank");
    setLoading(false);
  };

  const timeOut = () => {
    setLoading(true);
    setTimeout(bankNameHandler, 2000);
  };

  let update = "Agba baller dami";
  return (
    <div>
      <p>{age}</p>

      <p>
        Michael loves cars like {car.make} made in the year {car.year}
      </p>

      <p>{title}</p>

      {show ? <p>{update}</p> : <p></p>}

      <p>{!show ? "No data available" : "Avalable Data"}</p>

      <p>{loading ? "loading.." : bank}</p>

      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
      <button onClick={showHandler}>{show ? "unShow" : "show"}</button>
      <button onClick={timeOut}>
        {loading ? "loading.." : "Click me !!!"}
      </button>
    </div>
  );
};

export default Learning;
