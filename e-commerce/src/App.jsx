/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Navigation from "./assets/Components/Navigation";
import "./assets/css/index.css";
import Products from "./assets/Components/Product-Card";
import Banner from "./assets/Components/Banner";
import { Link } from "react-router-dom";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapiserver.reactbd.com/amazonproducts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      <Navigation />
      <Banner />
      <div className="product-container">
        {data?.map((value, index) => {
          return (
            <div key={index}>
              <Link to={"/product/" + value.id}>
                <Products
                  img={value.image}
                  name={value.title}
                  price={value.price}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
