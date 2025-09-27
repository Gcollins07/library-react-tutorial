import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Highlight } from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <h2>
          Why choose <span className="purple">Library?</span>
        </h2>
        <div className="highlight__wrapper">
          <Highlight
            icon={<FontAwesomeIcon icon="bolt" />}
            title="Easy and Quick"
            para="Find your favorite books in no time!"
          />
          <Highlight
            icon={<FontAwesomeIcon icon="book-open" />}
            title="10,000+ Books"
            para="Explore a vast collection of books across all genres."
          />
          <Highlight
            icon={<FontAwesomeIcon icon="tags" />}
            title="Affordable"
            para="Find popular books for as little as $10!"
          />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
