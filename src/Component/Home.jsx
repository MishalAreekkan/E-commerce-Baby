import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from "../assets/pic1.jpg"

function Home() {
  const carouselItems = [
    {
      imageSrc: "https://images.unsplash.com/photo-1610901137736-d7cc46657b11?q=80&w=2035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {

      imageSrc: "https://images.unsplash.com/photo-1588495644868-1416d25d8b33?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {

      imageSrc:"https://images.unsplash.com/photo-1504151806752-5b3af8e39e4e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      
      <div>
        <img src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-hero-baby-img.png"
          alt="baby img" style={{ marginLeft: "650px" }} />
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

export default Home




