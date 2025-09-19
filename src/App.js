import React from "react";
import NavbarMenu from "./components/NavbarMenu";
import Home from "./components/Home";
import Products from "./components/Products";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <NavbarMenu />
      <main>
        <Home />
        <Products />
        <Blogs />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} AgriElite — Premium farm-to-home products</p>
        </div>
      </footer>
    </>
  );
}
