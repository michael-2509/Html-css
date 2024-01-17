import React, { useState } from "react";

import classes from "./Form.module.css";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      firstName,
      lastName,
      password,
      confirmPassword,
      department,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>
      <label>
        Department:
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="Frontend">FE</option>
          <option value="Backend">BE</option>
        </select>
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
