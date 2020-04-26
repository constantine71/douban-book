import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

const CardList = () => {
  const currBooks = useSelector((state) => state.show);

  const card = currBooks.map((b) => {
    const { id, volumeInfo, saleInfo } = b;
    const { authors, imageLinks, title } = volumeInfo;
    return (
      <Card
        key={id}
        title={title}
        authors={authors}
        saleInfo={saleInfo}
        imageLinks={imageLinks}
      />
    );
  });

  return <div className="card-list-container">{card}</div>;
};

export default CardList;
