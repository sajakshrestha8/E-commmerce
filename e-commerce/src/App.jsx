/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Navigation from "./assets/Components/Navigation";
import "./assets/css/index.css";
import Products from "./assets/Components/Product-Card";
import Banner from "./assets/Components/Banner";
import { Link } from "react-router-dom";

export default function App() {
  const [data, setData] = useState([]);
  const [searchedItem, setsearchedItem] = useState("");
  const [filteredItem, setFilterdItem] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setFilterdItem(data);
        localStorage.setItem("ApiData", JSON.stringify(data));
      });
  }, []);

  useEffect(() => {
    if (!searchedItem) return;

    const filterdData = data.filter((item) => {
      return item.title.includes(searchedItem);
    });
    setFilterdItem(filterdData);
  }, [searchedItem, data]);

  return (
    <>
      <Navigation
        search={(e) => {
          const searcheddata = e.target.value;
          setsearchedItem(searcheddata);
        }}
      />
      <Banner />
      <div className="product-heading">Top Products</div>
      <div className="product-container">
        {filteredItem?.map((value, index) => {
          return (
            <div key={index}>
              <Link to={"/product/" + value.id} className="link">
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
