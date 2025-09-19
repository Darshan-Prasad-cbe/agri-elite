import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function ProductModal({ show, onHide, product }) {
  if (!product) return null;
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton className="modal-header-glass">
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-glass">
        <img src={product.img} alt={product.name} className="img-fluid mb-3 rounded" />
        <p>{product.desc}</p>
        <h5 className="price-tag">{product.price}</h5>
      </Modal.Body>
      <Modal.Footer className="modal-footer-glass">
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button className="glossy-btn">Buy Now</Button>
      </Modal.Footer>
    </Modal>
  );
}
