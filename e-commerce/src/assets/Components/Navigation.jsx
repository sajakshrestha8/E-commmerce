import { Link } from "react-router-dom";
import Logo from "../../Photos/Logo.jpg";
import { useEffect, useState } from "react";

export default function Navigation(props) {
  return (
    <>
      <div className="navigation-wrapper">
        <div className="logo-wrapper">
          <img src={Logo}></img>
        </div>
        <div>
          <input
            type="search"
            className="search-bar"
            placeholder="search for anything ..."
            onChange={props.search}
          ></input>
        </div>
        <div className="nav">
          <div className="nav-terms">Login</div>
          <Link to={"/login"} className="link">
            <div className="nav-terms">Sign Up</div>
          </Link>
          <div className="nav-terms">Cart</div>
        </div>
      </div>
    </>
  );
}
