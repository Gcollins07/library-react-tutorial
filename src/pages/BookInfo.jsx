import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Rating } from "../components/ui/Rating";
import { Price } from "../components/ui/Price"; 

export const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);
  const [added, setAdded] = useState(false);

  function addToBookToCart(book) {
    setAdded(true);
    addToCart(book);
  }

  function bookExistsOnCart() {
    return cart?.find((item) => +item.id === +id);
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <Price
                  salePrice={book.salePrice}
                  originalPrice={book.originalPrice}
                />
                <div className="book__summary">
                  <h2 className="book__summary--title">Summary</h2>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores, at laboriosam consectetur hic provident corporis
                    cupiditate quidem. At commodi alias ut dicta debitis sequi
                    ex et ipsum, magni cum quod.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores, at laboriosam consectetur hic provident corporis
                    cupiditate quidem. At commodi alias ut dicta debitis sequi
                    ex et ipsum, magni cum quod.
                  </p>
                </div>
                {bookExistsOnCart() ? (
                  <Link to="/cart">
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addToBookToCart(book)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selcted--top">
              <h2 className="book__selected--title--top">
                Recommended <span className="purple">Books</span>
              </h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <div className="book" key={book.id}>
                    <Link to={`/books/${book.id}`}>
                      <figure className="book__img--wrapper">
                        <img src={book.url} alt="" className="book__img" />
                      </figure>
                    </Link>
                    <div className="book__title">
                      <Link
                        to={`/books/${book.id}`}
                        className="book__title--link"
                      >
                        {book.title}
                      </Link>
                    </div>
                    <Rating rating={book.rating} />
                    <Price
                      salePrice={book.salePrice}
                      originalPrice={book.originalPrice}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
