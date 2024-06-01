import Logo from "../../Photos/Logo.jpg";

export default function Navigation() {
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
          ></input>
        </div>
        <div className="nav">
          <div className="nav-terms">Login</div>
          <div className="nav-terms">Sign Up</div>
          <div className="nav-terms">Cart</div>
        </div>
      </div>
    </>
  );
}
