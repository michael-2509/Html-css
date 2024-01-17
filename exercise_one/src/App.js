import "./App.css";
import Form from "./components/eventHandling/formik/formik";
// import Products from "./components/Products/Products";

// import Counter from "./components/counter/counter";
// import Homepage from "./components/homePage/HomePage";
// import Learning from "./components/learning/Learning";
// import Person from "./components/person/Person";

function App() {
  // const counter = 5;
  // const data = [
  //   { id: 1, name: "John", initialAge: 25 },
  //   { id: 2, name: "Mali", initialAge: 45 },
  //   { id: 3, name: "Joy", initialAge: 54 },
  // ];

  return (
    <div className="App">
      {/* <Learning />
      <Homepage />
      <Counter greetings="hello" count={counter} />
      <Person data={data} /> */}
      {/* <Products /> */}
      <Form />
    </div>
  );
}

export default App;
