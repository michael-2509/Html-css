import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./components/Products/Products";
import Counter from "./components/counter/counter";
import Budget from "./components/Budget/Budget";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/product",
    element: <Products />,
  },

  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/budget",
    element: <Budget />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
