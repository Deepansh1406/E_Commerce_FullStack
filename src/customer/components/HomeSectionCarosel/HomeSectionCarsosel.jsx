import React, { useState, useEffect, useRef } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./HomeSectionCarousel.css";

const HomeSectionCarsosel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);
  const containerRef = useRef(null);

  const calculateItemsToShow = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const itemWidth = containerRef.current.querySelector('.carousel-item').offsetWidth;
      const newItemsToShow = Math.floor(containerWidth / itemWidth);
      setItemsToShow(newItemsToShow);
    }
  };

  const slidePrev = () => {
    setActiveIndex(activeIndex - itemsToShow);
  };

  const slideNext = () => {
    setActiveIndex(activeIndex + itemsToShow);
  };

  useEffect(() => {
    calculateItemsToShow();
    window.addEventListener('resize', calculateItemsToShow);
    return () => {
      window.removeEventListener('resize', calculateItemsToShow);
    };
  }, []);

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="carousel-container" ref={containerRef}>
        <div className="carousel-wrapper" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {data.map((item, index) => (
            <div key={index} className="carousel-item">
              <HomeSectionCard product={item} />
            </div>
          ))}
        </div>
        {activeIndex !== 0 && (
          <Button
            variant="contained"
            className="prev-button"
            onClick={slidePrev}
            aria-label="prev"
          >
            <KeyboardArrowLeftIcon />
          </Button>
        )}
        {activeIndex + itemsToShow < data.length && (
          <Button
            variant="contained"
            className="next-button"
            onClick={slideNext}
            aria-label="next"
          >
            <KeyboardArrowRightIcon />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarsosel;
