import React from 'react';
import './Cards.css'; 
import img from '../componentes/../imagene/img.jpg'; 
import img4 from '../componentes/../imagene/img4.jpg'; 
import img8 from '../componentes/../imagene/img8.jpg'; 
function Cards() {
  return (
    <div className="cards-container">
      <div className="card">
        <img src={img} alt="Imagen 1" className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">Foto 1</h2>
          <p className="card-text">Una fotografia basada en naturaleza</p>
        </div>
      </div>
      <div className="card">
        <img src={img4} alt="Imagen 1" className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">Foto 2</h2>
          <p className="card-text">La  ave favorita</p>
        </div>
      </div>
      <div className="card">
        <img src={img8} alt="Imagen 1" className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">Foto 3</h2>
          <p className="card-text">Fruto del trabajo continuo</p>
        </div>
      </div>
    </div>
    
  );
}

export default Cards;