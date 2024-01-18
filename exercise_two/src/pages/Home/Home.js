import React from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <h2 className="m-auto w-36" y>
        Welcome to the Budgetfy
      </h2>
      <p>Plan your budget with us</p>
      <li>
        <Link to="/budget">Budget</Link>
      </li>
    </div>
  );
};

export default Home;
