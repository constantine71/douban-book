import React from "react";

const Card = (props) => {
  const { name, price, image } = props;
  return (
    <div className="card-container">
      <div className="card-detail">
        <div className="card-invisible">hahaha</div>
        <div className="card-info">
          <div className="card-name">{name}</div>
          <div className="card-author">harry potter hahahah</div>
        </div>
        <div className="card-footer">
          <div className="card-price">{price}</div>
        </div>
      </div>
      <div className="card-image">{image}</div>
    </div>
  );
};

export default Card;
