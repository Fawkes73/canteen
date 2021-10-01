import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


import banner1 from "../pages/slider/banner1.jpg";
import banner2 from "../pages/slider/banner2.jpg";
import banner3 from "../pages/slider/banner3.jpg";

import "./Banner.css"
const Banner = () => {
  return (
    <>
      <Carousel className="main-slide">
        <div>
          <img src={banner1} alt="samosa" width="100%" height="100%" />

        </div>
        <div>
          <img src={banner2} alt="banner2" width="100%" height="100%" />

        </div>
        <div>
          <img src={banner3} alt="banner3" width="100%" height="100%" />

        </div>
      </Carousel>
    </>
  )
}

export default Banner
