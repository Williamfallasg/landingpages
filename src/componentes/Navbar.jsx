import React from 'react';
import './Navbar.css';

function Navbar() {
  
  return (
    <nav className="navbar">
      
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
    </nav>
  );
}

export default Navbar;