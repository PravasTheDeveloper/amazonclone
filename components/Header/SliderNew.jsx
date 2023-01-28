import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function SliderNew() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <Carousel responsive={responsive}>
        <div><img src="https://m.media-amazon.com/images/I/51LOsbERUEL._AC_SX679_.jpg" className="w-auto h-64" alt="" /></div>
        <div><img src="https://m.media-amazon.com/images/I/61uI+orDOZL._AC_SX679_.jpg" className="w-auto h-64" alt="" /></div>
        <div><img src="https://m.media-amazon.com/images/I/81lDOtJRTkL._AC_SX679_.jpg" className="w-auto h-64" alt="" /></div>
        <div><img src="https://m.media-amazon.com/images/I/71d5rAq4YaL._AC_SX679_.jpg" className="w-auto h-64" alt="" /></div>
        <div><img src="https://m.media-amazon.com/images/I/71Pm7ieq-IS._AC_SX679_.jpg" className="w-auto h-64" alt="" /></div>
        <div><img src="https://m.media-amazon.com/images/I/811BrUAgO+L._AC_SX679_.jpg" className="w-auto h-64" alt="" /></div>
        <div><img src="https://m.media-amazon.com/images/I/61V2VSfh3hL._AC_SX679_.jpg" className="w-auto h-64" alt="" /></div>
        <div><img src="https://m.media-amazon.com/images/I/41ZrtojinRL._AC_SX679_.jpg" className="w-auto h-64" alt="" /></div>
      </Carousel>
    </>
  );
}

export default SliderNew;
