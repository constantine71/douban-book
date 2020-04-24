import React from "react";
import CardList from "./CardList";

const Gallery = () => {
  const allLen = 10;
  const currLen = 3;
  const curr = 5;
  const shouldLeftDisable = curr === 0;
  const shouldRightDisable = curr + currLen === allLen - 1;
  return (
    <div className="Gallery-container">
      <button
        className="slider-button slider-button-left"
        disabled={shouldLeftDisable}
      >
        &#8249;
      </button>
      <CardList />
      <button
        id="hahaha"
        className="slider-button slider-button-right"
        disabled={shouldRightDisable}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Gallery;
