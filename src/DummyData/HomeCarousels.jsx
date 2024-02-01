import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CustomCarouselItem = ({ imageSrc, content }) => (
    <Carousel.Item style={{height:"3rem"}}>
      <img
        className="d-block w-100"
        src={imageSrc}
      />
      <Carousel.Caption>
        <p>{content}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
  export default CustomCarouselItem
