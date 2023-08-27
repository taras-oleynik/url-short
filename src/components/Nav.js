import shorten from "../images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRef } from "react";

function Mobile() {
  const menuContainerRef = useRef(null);
  return (
    <div className="mobile-menu">
      <GiHamburgerMenu
        onClick={() => {
          menuContainerRef.current.classList.toggle("flex");
        }}
      />
      <div className="mobile-absolute-wrapper" ref={menuContainerRef}>
        <div className="mobile-menu-container">
          <button className="nav-mobile">Features</button>
          <button className="nav-mobile">Pricing</button>
          <button className="nav-mobile">Resorses</button>
          <div className="menu-div"></div>
          <button className="nav-mobile">Login</button>
          <button className="sign-btn green-btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
function Desktop() {
  return (
    <div className="desktop-menu">
      <div className="nav-links">
        <a className="black-hover" href="#">
          Features
        </a>
        <a className="black-hover" href="#">
          Pricing
        </a>
        <a className="black-hover resorses-link" href="#">
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
function Nav() {
  return (
    <div className="nav">
      <img className="logo" src={shorten} alt="shorten-logo" />
      <Mobile />
      <Desktop />
    </div>
  );
}
export default Nav;
