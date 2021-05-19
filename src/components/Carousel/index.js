import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const index = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div className="slider">
        <img src="./carousel/1.jpg" alt="" />
      </div>
      <div className="slider">
        <img src="./carousel/2.jpg" alt="" />
      </div>
      <div className="slider">
        <img src="./carousel/3.jpg" alt="" />
      </div>
      <div className="slider">
        <img src="./carousel/4.jpg" alt="" />
      </div>
      <div className="slider">
        <img src="./carousel/5.jpg" alt="" />
      </div>
    </Slider>
  );
};

export default index;
