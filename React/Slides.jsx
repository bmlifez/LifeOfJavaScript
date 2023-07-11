import React, { useState } from "react";

const DIRECTIONS = {
  RIGHT: "RIGHT",
  LEFT: "LEFT",
};

const Slides = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const restartSlider = () => {
    setActiveSlide(0);
  };

  const updateActiveSlideRight = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide((prevValue) => prevValue + 1);
    }
  };

  const updateActiveSlideLeft = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide((prevValue) => prevValue - 1);
    }
  };

  const updateSlider = (direction) => {
    switch (direction) {
      case DIRECTIONS.RIGHT:
        updateActiveSlideRight();
        break;
      case DIRECTIONS.LEFT:
        updateActiveSlideLeft();
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={restartSlider}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={() => updateSlider(DIRECTIONS.LEFT)}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={() => updateSlider(DIRECTIONS.RIGHT)}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[activeSlide].title}</h1>
        <p data-testid="text">{slides[activeSlide].text}</p>
      </div>
    </div>
  );
};

export default Slides;
