import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function Login() {
  return (
    <>
      <Navigation />
      <div className="login-wrapper">
        <div className="email-pass">
          <div className="label">
            <label>Enter Your Email</label>
          </div>
          <br />
          <div className="label">
            <input type="email" placeholder="Email" className="input" />
          </div>
          <br />
          <div className="label">
            <label>Enter Your Password</label>
          </div>
          <br />
          <div className="label">
            <input type="password" className="input" placeholder="Password" />
          </div>
        </div>
        <br />
        <div className="label">
          <Link to={"/cart"}>
            <button className="login-btn">Login</button>
          </Link>
        </div>
        <br />
        <div className="label">
          <label>Don't have an account? </label>
          <Link to={"/signin"} className="link">
            <label>sign up</label>
          </Link>
        </div>
        <br />
      </div>
    </>
  );
}
