import React, { useState } from "react";
import { Container, Button, Carousel } from "react-bootstrap";

// Import background images
import bg1 from "../assets/bg (2).jpg";
import bg2 from "../assets/bg (3).jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg (4).jpg";
import bg5 from "../assets/bg (5).jpg";
import bg6 from "../assets/bg (6).jpg";

export default function Home() {
  const [spinResult, setSpinResult] = useState(null);
  const [spinCount, setSpinCount] = useState(0);

  const products = [
    "Organic Rice",
    "Fresh Wheat",
    "Corn Seeds",
    "Tomato Seeds",
    "Onion Seeds",
    "Potato Seeds",
    "Chili Seeds",
    "Sunflower Seeds"
  ];

  const handleSpin = () => {
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    setSpinResult(randomProduct);
    setSpinCount(spinCount + 1);
  };

  return (
    <section id="home" className="home-section position-relative">
      {/* Background Carousel */}
      <Carousel controls={false} indicators={false} fade interval={4000} className="bg-carousel">
        {[bg1, bg2, bg3, bg4,bg5,bg6].map((img, i) => (
          <Carousel.Item key={i}>
            <img className="d-block w-100 bg-carousel-img" src={img} alt={`slide-${i}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Overlay Content */}
      <div className="home-overlay d-flex align-items-center text-center">
        <Container>
          <h1 className="gradient-text">AgriElite</h1>
          <p className="lead mt-3">
            Premium agriculture products directly from our farms to your home.
            <br />
            Quality, Trust, and Growth – that’s our promise.
          </p>
          <div className="mt-4">
            <Button className="btn-custom m-2" href="#products">Explore Products</Button>
            <Button className="btn-custom m-2" href="#contact">Contact Us</Button>
          </div>

          <div className="spin-section mt-5">
            <div className="spin-controls mx-auto">
              <h4 className="neon-title">Spin to Discover Your Product!</h4>
              <Button onClick={handleSpin} className="spin-btn">Spin</Button>
              {spinResult && (
                <div className="spin-result mt-3">
                  <h5>We think you’re looking for <b>{spinResult}</b></h5>
                  {spinCount < 2 ? (
                    <p>Not satisfied? Click spin again!</p>
                  ) : (
                    <Button className="btn-custom mt-2">Buy Now</Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
