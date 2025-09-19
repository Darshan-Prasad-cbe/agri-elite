import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <section id="contact" className="py-5 contact-section">
      <Container>
        <h2 className="section-title gradient-text text-center mb-4">Contact & Terrace Tips</h2>
        <Row className="g-4">
          <Col md={6}>
            <div className="contact-info glass-box p-4">
              <h4>Benefits of Terrace Gardening</h4>
              <p>Great for small spaces — grow vegetables, improve air quality and reduce food cost. Use good potting mix, regular watering, and companion planting.</p>
              <h6>Quick maintenance tips</h6>
              <ol>
                <li>Use drip irrigation or self-watering planters</li>
                <li>Rotate crops seasonally</li>
                <li>Use organic compost</li>
              </ol>
            </div>
          </Col>
          <Col md={6}>
            <Form className="contact-form p-4 glass-box">
              <Form.Group className="form-floating mb-3">
                <Form.Control id="name" placeholder=" " type="text" />
                <label htmlFor="name">Username</label>
              </Form.Group>
              <Form.Group className="form-floating mb-3">
                <Form.Control id="phone" placeholder=" " type="text" />
                <label htmlFor="phone">Contact Number</label>
              </Form.Group>
              <Form.Group className="form-floating mb-3">
                <Form.Control id="email" placeholder=" " type="email" />
                <label htmlFor="email">Email</label>
              </Form.Group>
              <Form.Group className="form-floating mb-3">
                <Form.Control as="textarea" id="message" placeholder=" " style={{ height: 120 }} />
                <label htmlFor="message">Message</label>
              </Form.Group>
              <Button className="glossy-btn w-100" type="submit">Send Message</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
