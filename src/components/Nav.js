import shorten from "../images/logo.svg";
function Nav() {
  return (
    <div className="nav">
      <img className="logo" src={shorten} alt="shorten-logo" />
      <div className="nav-links">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Resorses</a>
      </div>
      <div className="buttons">
        <button className="login-btn">Login</button>
        <button className="sign-btn">Sign Up</button>
      </div>
    </div>
  );
}

export default Nav;
