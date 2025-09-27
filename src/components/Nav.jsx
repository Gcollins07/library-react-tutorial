import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from "../assets/Library.svg"

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <a href="/" className="nav__logo">
          <img src={LibraryLogo} alt="Library Logo" />
        </a>
        <ul className="nav__links">
          <li className="nav__list">
            <a href="/" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__list">
            <a href="/" className="nav__link">
              Books
            </a>
          </li>
          <button className="button__menu">
            <FontAwesomeIcon icon="bars" />
          </button>
          <li className="nav__icon">
            <a href="/cart" className="nav__link">
              <FontAwesomeIcon icon="shopping-cart" />
            </a>
            <span className="cart__length">1</span>
          </li>
        </ul>
        <div className="menu__backdrop">
            <button className="menu__close">
              <FontAwesomeIcon icon="times" />
            </button>
            <ul className="menu__links">
                <li className="menu__list">
                    <a href="/">Home</a>
                    <a href="/books">Books</a>
                    <a href="/cart">Cart</a>
                </li>
                
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
