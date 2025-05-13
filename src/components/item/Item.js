/*#######################################
              Importaciones
#########################################*/

//Dependencias
import React from "react";
//Estilos
import './Item.css';

/*#######################################
                Logica
#########################################*/
const Item = ({ data }) => { //Funcion contructora

  const { brand, name, description, price, category, image } = data;

  return (
    <div className="orden-Card">
      <div className="card">
        <img
          className="card-img"
          src={image || "https://via.placeholder.com/150"} // Imagen por defecto si no hay imagen
          alt={category || "Producto"}
        />
        <div className="card-info">
          <p className="text-title">{brand || "Marca desconocida"} -- {name || "Producto sin nombre"}</p>
          <p className="text-body">{description || "Sin descripción disponible"}</p>
        </div>
        <div className="card-footer">
          <span className="text-title">${price || "0.00"}</span>
        </div>
      </div>
    </div>
  );
};

/*#######################################
              Exportaciones
#########################################*/
export default Item;