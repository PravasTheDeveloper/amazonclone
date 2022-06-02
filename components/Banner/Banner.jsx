import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <>
            <div className='relative'>
                <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-10' />

                <Carousel
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    interval={2000}
                >
                    <div>
                        <img loading='lazy' src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" alt="" />
                    </div>
                    <div>
                        <img loading='lazy' src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" alt="" />
                    </div>
                    <div>
                        <img loading='lazy' src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt="" />
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default Banner
