import React from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <h1 className="ml-10">App</h1>
    </div>
  );
};

export default App;
