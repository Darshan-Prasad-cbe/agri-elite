import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavbarMenu() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`glossy-navbar fixed-top ${scrolled ? "nav-solid" : ""}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="brand-name neon-glow">
          <span className="logo-dot" /> AgriElite
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-item-glow">Home</Nav.Link>
            <Nav.Link href="#products" className="nav-item-glow">Products</Nav.Link>
            <Nav.Link href="#blogs" className="nav-item-glow">Blogs</Nav.Link>
            <Nav.Link href="#contact" className="nav-item-glow">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
