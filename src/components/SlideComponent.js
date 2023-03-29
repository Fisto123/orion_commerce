import React from "react";
import "./slider.css";
import Slider from "infinite-react-carousel";
const SlideComponent = ({ name, children, arrowsScroll }) => {
  return (
    <div className="slider">
      <div className="container">
        <div className="flex justify-between p-2 mb-9 border border-b-black">
          <h4 className="font-bold p-5">{name}</h4>
          <h5 className="text-blue-400 text-sm font-bold p-5">see all</h5>
        </div>
        <Slider dots slidesToShow={4} arrowScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default SlideComponent;
