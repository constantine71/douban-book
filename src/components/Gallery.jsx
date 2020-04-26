import React from "react";
import CardList from "./CardList";
import { useSelector, useDispatch } from "react-redux";

const Gallery = () => {
  const dispatch = useDispatch();
  const nShow = useSelector((state) => state.nShow);
  const nBook = useSelector((state) => state.nBook);
  const first = useSelector((state) => state.first);
  const shouldLeftDisable = first === 0;
  const shouldRightDisable = first + nShow === nBook;
  return (
    <div className="Gallery-container">
      <button
        className="slider-button slider-button-left"
        disabled={shouldLeftDisable}
        onClick={() => dispatch({ type: "GO_LEFT" })}
      >
        &#8249;
      </button>
      <CardList />
      <button
        id="hahaha"
        className="slider-button slider-button-right"
        disabled={shouldRightDisable}
        onClick={() => dispatch({ type: "GO_RIGHT" })}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Gallery;
