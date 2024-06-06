import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navigation from "./Navigation";
import Rating from "../../Photos/star_24dp_FILL0_wght400_GRAD0_opsz24.png";
import Products from "./Product-Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Desc() {
  const addedToCart = () =>
    toast(item + desc.title + "added successfully to the Cart successfully");

  const [desc, setDesc] = useState({});
  const [realtedData, setRealtedData] = useState([]);
  const params = useParams();
  const [item, setItem] = useState(1);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + params.id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDesc(data);
      });

    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRealtedData(data);
      });
  }, [params.id]);

  const minnus = () => {
    if (item <= 1) {
      return item;
    } else {
      setItem(item - 1);
    }
  };

  const plus = () => {
    setItem(item + 1);
  };

  const Cart = () => {
    // const storedItems = localStorage.getItem("AddedData");
    // const addedItemArray = [storedItems];

    const addeditem = {
      image: desc.image,
      name: desc.title,
      price: desc.price,
      quantity: item,
      total: desc.price * item,
    };
    console.log(addeditem);

    // addedItemArray.push(addeditem);
    localStorage.setItem("AddedData", JSON.stringify(addeditem));
    addedToCart();
  };

  return (
    <>
      <Navigation />
      <div className="desc-wrapper">
        <div>
          <img src={desc.image} className="product-img"></img>
        </div>
        <div className="product-info-wrapper">
          <div className="product-title">
            <label>{desc.title}</label>
          </div>
          <div>
            <a href="#">Visit Our Store</a>
          </div>
          <div>
            <div className="rating-wrapper">
              <div className="rate">
                <div>
                  Rating:{" "}
                  <b>
                    {desc.rating ? desc.rating.rate : "No rating available"}
                  </b>
                </div>
                <div>
                  <img src={Rating} className="rating-img"></img>
                </div>
              </div>
              <div>
                <a href="#">
                  {desc.rating ? desc.rating.count : "No rating available"}
                  ratings
                </a>
              </div>
            </div>
            <div>
              <label>Price:</label>
              <label className="price"> ${desc.price}</label>
            </div>
          </div>

          <div>
            <label className="quantity">Quantity</label>
            <button onClick={minnus} className="manage-item">
              -
            </button>
            <label className="quantity-number">{item}</label>
            <button onClick={plus} className="manage-item">
              +
            </button>
          </div>
          <div className="buttons-wrapper">
            <div className="buy-buttons">
              <button className="buy">Buy Now</button>

              <button className="add-cart" onClick={Cart}>
                Add to Cart
              </button>
            </div>
            <div></div>
          </div>

          <br />
          <div>
            <b>Quantity:</b>
          </div>
          <label>10</label>
          <div>
            <b>Category:</b>
          </div>
          <label> {desc.category}</label>

          <div className="product-description">
            <label>
              <b>About this Product</b>
            </label>
            <br />
            <div className="description">
              <label>{desc.description}</label>
            </div>
            <br />
          </div>
        </div>
      </div>

      {/* Category section */}

      <div className="product-heading">Related Products</div>
      <div className="product-container">
        {realtedData.map((value, index) => {
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
