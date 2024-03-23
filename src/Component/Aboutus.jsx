import React from 'react'
import "./Aboutus.css"
import Carousel from 'react-bootstrap/Carousel';

function Aboutus() {
  const carouselItems = [
    {
      imageSrc: "https://images.unsplash.com/photo-1603298624547-e38905ce21d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {

      imageSrc: "https://images.unsplash.com/photo-1579708992967-60e603751222?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {

      imageSrc: "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div>
      <div>
        <h1 className='div1h1'>About Us</h1>
        <h4 className='div1h4'>South India's Favourite Baby Store</h4>
      </div>
      <div style={{ height: "28rem" }}  >
        <Carousel data-bs-theme="dark"  >
          {carouselItems.map((item, index) => (
            <Carousel.Item key={index} >
              <img
                className="d-block"
                src={item.imageSrc}
              />
            </Carousel.Item>
          ))}
        </Carousel>

      </div>
    </div>
  )
}

export default Aboutus
