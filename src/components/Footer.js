import shorten from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import twiter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";

function Footer() {
  return (
    <footer>
      <h2 className="foot-logo">Shortly</h2>
      <div className="features col">
        <p
          className="feature-name
        "
        >
          Features
        </p>
        <a href=""> Link Shortening</a>
        <a href="">Branded Links</a>
        <a href="">Analytics </a>
      </div>
      <div className="resourses col">
        <p
          className="feature-name
        "
        >
          Resources
        </p>
        <a href="">Blog</a>
        <a href="">Developers</a>
        <a href="">Support</a>
      </div>
      <div className="company col">
        <p
          className="feature-name
        "
        >
          Company
        </p>
        <a href="">About</a>
        <a href="">Our Team</a>
        <a href="">Careers</a>
        <a href="">Contact</a>
      </div>
      <div className="socials">
        <a href="https://www.facebook.com/">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="#">
          <img src={twiter} alt="twiter" />
        </a>
        <a href="#">
          <img src={pinterest} alt="pinterest" />
        </a>
        <a href="#">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
