import React from "react";

const Button = ({ add, remove }) => {
  return (
    <>
      {" "}
      <button
        onClick={add}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        +
      </button>
      <button
        onClick={remove}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        -
      </button>
    </>
  );
};

export default Button;
