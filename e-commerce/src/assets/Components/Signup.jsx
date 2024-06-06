import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function Signup() {
  return (
    <>
      <Navigation />
      <div className="signin-wrapper">
        <div className="email-pass">
          <div className="label">
            <label>Enter Your First Name</label>
          </div>
          <br />
          <div className="label">
            <input type="text" placeholder="First Name" className="input" />
          </div>
          <br />
          <div className="label">
            <label>Enter Your Last Name</label>
          </div>
          <br />
          <div className="label">
            <input type="text" className="input" placeholder="Last Name" />
          </div>
          <div className="label">
            <label>Enter Your Email</label>
          </div>
          <br />
          <div className="label">
            <input type="email" className="input" placeholder="Email" />
          </div>

          <div className="label">
            <label>Enter Your Password</label>
          </div>
          <br />
          <div className="label">
            <input type="password" className="input" placeholder="Password" />
          </div>

          <div className="label">
            <label>Confirm your Password</label>
          </div>
          <br />
          <div className="label">
            <input
              type="text"
              className="input"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <br />
        <div className="label">
          <button className="login-btn">Sign In</button>
        </div>
        <br />
        <div className="label">
          <label>Already have an account? </label>
          <Link to={"/login"} className="link">
            <label>sign in</label>
          </Link>
        </div>
        <br />
      </div>
    </>
  );
}
