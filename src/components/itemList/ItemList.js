/*#######################################
              Importaciones
#########################################*/

//Modulos
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig"; // Asegúrate de que la ruta sea correcta

//Estilos
import './ItemList.css'
//Componentes
import Item from '../item/Item'

//Core


/*#######################################
                Logica
#########################################*/


const ItemList = () => { //Funcion contructora

  const [listaDeProductos, setListaDeProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosCollection = collection(db, "productos"); // Nombre de la colección en Firestore
        const productosSnapshot = await getDocs(productosCollection);
        const productosList = productosSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setListaDeProductos(productosList);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className="item-list">
      {listaDeProductos.map((producto) => (
        <Item key={producto.id} data={producto} />
      ))}
    </div>
  );
}

/*#######################################
              Exportaciones
#########################################*/
export default ItemList