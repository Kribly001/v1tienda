import React from "react";
import './Item.css';

const Item = ({ data }) => {
  const { brand, name, description, price, category, image } = data;

  return (
    <div className="orden-Card">
      <div className="card">
        <img
          className="card-img"
          src={image || "https://via.placeholder.com/150"}
          alt={category || "Producto"}
        />
        <div className="card-info">
          <p className="text-title">{brand || "Marca desconocida"} — {name || "Producto sin nombre"}</p>
          <p className="text-body">{description || "Sin descripción disponible"}</p>
        </div>
        <div className="card-footer">
          <span className="text-title">${price || "0.00"}</span>
          <button className="btn-vermas">Ver más</button>
        </div>
        <div className="btn-container">
          <button className="btn-agregar">🛒 Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
