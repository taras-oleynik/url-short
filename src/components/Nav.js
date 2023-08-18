import shorten from "../images/logo.svg";
function Nav() {
  return (
    <div className="nav">
      <img className="logo" src={shorten} alt="shorten-logo" />
      <div className="nav-links">
        <a className="black-hover" href="#">
          Features
        </a>
        <a className="black-hover" href="#">
          Pricing
        </a>
        <a className="black-hover" href="#">
          Resorses
        </a>
      </div>
      <div className="buttons">
        <button className="login-btn">Login</button>
        <button className="sign-btn green-btn">Sign Up</button>
      </div>
    </div>
  );
}

export default Nav;
