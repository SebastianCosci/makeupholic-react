import React, { useState } from 'react';
import Logo from "../img/logo.webp";
import '../navbar.css';
import { Link } from "react-router-dom";
import CartWidget from './cartwidget.js';

export const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header>
      <div className="menu">
        <box-icon name="menu"></box-icon>
      </div>
      <ul>
        <li>
          <Link to="/" className="nav-link">Inicio</Link>
        </li>
        <li>
          <Link to="/labiales" className="nav-link">Labiales</Link>
        </li>
        <li>
          <Link to="/bases" className="nav-link">Bases</Link>
        </li>
      </ul>
      <Link to="/">
        <div className="div-logo">
          <img className="logo-mh" src={Logo} alt="logo-mh" width={300} height={100} />
        </div>
      </Link>
      <CartWidget />
    </header>
  );
};

export default NavBar;
