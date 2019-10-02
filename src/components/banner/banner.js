import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './banner.css'
import banner from './banner.png'
import banner2 from './banner2.png'
import banner3 from './banner3.png'

const Banner = (props) => {

    return (
        <Carousel className="Banner">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner2}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner3}
                />
            </Carousel.Item>
        </Carousel>
    )
}

  export default Banner;