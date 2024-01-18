import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductList from "./ProductList";
import classes from "./Products.module.css";

import { slicedArray } from "../../utils";
import ProductCategory from "./ProductCategory";
import Header from "../Header/Header";

const Products = () => {
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  let newData = [];

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = async () => {
    setLoading(!Loading);
    try {
      console.log("try");
      const response = await axios.get("https://dummyjson.com/products");
      setData(response.data.products);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(!Loading);
    }
  };

  if (Loading) {
    return <p>Loading...</p>;
  }

  if (Data.length === 0) {
    return <p>No data</p>;
  }

  if (Data) {
    newData = slicedArray(Data, 10);
  }

  return (
    <div>
      <Header />
      <ProductCategory />
      <h2>PRODUCT LIST</h2>
      <div className={classes.product}>
        {" "}
        {newData.map((item, index) => (
          <ProductList key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
