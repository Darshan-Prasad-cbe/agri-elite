import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProductModal from "./ProductModal";

// import images from assets
import riceImg from "../assets/rice.jpg";
import wheatImg from "../assets/wheat.jpg";
import cornImg from "../assets/corn.jpg";
import tomatoImg from "../assets/tomato.jpg";
import sunImg from "../assets/sunflower (2).jpg";
import potatoImg from "../assets/potato.jpg";
import onionImg from "../assets/onion.jpg";
import chilliImg from "../assets/chilli.jpg";

const products = [
  { name: "Organic Rice", price: "₹500", desc: "Premium organic rice directly from farms", img: riceImg },
  { name: "Fresh Wheat", price: "₹400", desc: "High quality wheat grains", img: wheatImg },
  { name: "Corn Seeds", price: "₹300", desc: "Hybrid corn seeds for high yield", img: cornImg },
  { name: "Tomato Seeds", price: "₹250", desc: "High germination tomato seeds", img: tomatoImg },
  { name: "Onion Seeds", price: "₹280", desc: "Best onion seeds for farming", img: onionImg },
  { name: "Potato Seeds", price: "₹350", desc: "Superior quality potato seeds", img: potatoImg },
  { name: "Chili Seeds", price: "₹220", desc: "Spicy chili seeds for kitchen gardens", img: chilliImg },
  { name: "Sunflower Seeds", price: "₹260", desc: "Healthy sunflower seeds", img: sunImg }
];

export default function Products() {
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);

  function openModal(product) {
    setSelected(product);
    setShow(true);
  }
  function closeModal() {
    setShow(false);
    setSelected(null);
  }

  return (
    <section id="products" className="py-5 products-section">
      <Container>
        <h2 className="section-title gradient-text text-center mb-4">Our Products</h2>
        <Row>
          {products.map((p, i) => (
            <Col md={3} sm={6} key={i} className="mb-4">
              <Card className="product-card h-100 interactive-card" onClick={() => openModal(p)}>
                <div className="product-image-wrap">
                  <Card.Img variant="top" src={p.img} className="product-img" />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Text className="muted">{p.price}</Card.Text>
                  </div>
                  <Button className="ghost-btn mt-2">View details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <ProductModal show={show} onHide={closeModal} product={selected} />
    </section>
  );
}
