import React from "react";

const Card = (props) => {
  const { title, saleInfo, imageLinks, authors } = props;
  const alternateImage =
    "https://cdn2.iconfinder.com/data/icons/symbol-blue-set-3/100/Untitled-1-94-128.png";
  const imageLink = imageLinks ? imageLinks.thumbnail : alternateImage;
  const author = authors ? authors.toString() : "unknown";
  const { saleability, listPrice } = saleInfo;
  const price = listPrice
    ? listPrice.amount + " " + listPrice.currencyCode
    : saleability;
  return (
    <div className="card-container">
      <div className="card-detail">
        <div className="card-invisible">hahaha</div>
        <div className="card-info">
          <div className="card-name">{title}</div>
          <div className="card-author">{author}</div>
        </div>
        <div className="card-footer">
          <div className="card-price">{price}</div>
        </div>
      </div>
      <div className="card-image">
        <img src={imageLink} alt="Book Thumbnail" className="book-image" />
      </div>
    </div>
  );
};

export default Card;
