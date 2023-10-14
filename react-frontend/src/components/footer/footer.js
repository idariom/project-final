import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-white">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/products" className="nav-link px-2 text-white">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link px-2 text-white">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link px-2 text-white">
              Contacts
            </a>
          </li>
        </ul>
        <p className="text-center text-white">&copy; 2023 Proyecto final, Ivan, Steven, Alexis, Cristian</p>
      </footer>
    </div>
  );
}

export default Footer;
