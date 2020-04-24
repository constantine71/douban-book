import React from "react";
import Card from "./Card";

const CardList = () => {
  const initialState = [
    { id: "1", name: "name1", price: "1", image: "image1" },
    { id: "2", name: "name2", price: "2", image: "image2" },
    { id: "3", name: "name3asdkhkjhahksjdaks", price: "3", image: "image3" },
  ];
  return (
    <div className="card-list-container">
      {initialState.map((e) => (
        <Card key={e.id} name={e.name} price={e.price} image={e.image} />
      ))}
    </div>
  );
};

export default CardList;
