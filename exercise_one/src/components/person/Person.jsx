import React, { useState } from "react";

const Person = (Props) => {
  const [data, setData] = useState(Props.data);

  const incrementHandler = (id) => {
    setData(
      data.map((person) =>
        person.id === id
          ? { ...person, initialAge: person.initialAge + 1 }
          : person
      )
    );
  };

  const decrementHandler = (id) => {
    setData(
      data.map((person) =>
        person.id === id
          ? { ...person, initialAge: person.initialAge - 1 }
          : person
      )
    );
  };

  return (
    <div>
      <h2>Person Data</h2>
      <table style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Id</th> <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.initialAge}</td>
              <td>
                <button onClick={() => incrementHandler(row.id)}>+</button>
                <button onClick={() => decrementHandler(row.id)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Person;
