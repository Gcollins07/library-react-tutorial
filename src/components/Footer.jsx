import React from "react";
import Logo from "../assets/Library.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img src={Logo} alt="" className="footer__logo--img" />
            </figure>
          </Link>
          <div className="footer__list">
            <Link to="/about" className="footer__link ">Home</Link>
            <Link to="" className="footer__link no-cursor">About Us</Link>
            <Link to="/books" className="footer__link">Books</Link>
            <Link to="/cart" className="footer__link">Cart</Link>
          </div>
          <div className="footer__copyright">© 2023 Library. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};
