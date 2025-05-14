/*#######################################
              Importaciones
#########################################*/

//Modulos
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
//Estilos
import './ItemDetail.css'


//Core


/*#######################################
                Logica
#########################################*/
const ItemDetail = ({ productoId }) => { //Funcion contructora
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        // Buscar por campo id (número o string según tu base)
        const q = query(collection(db, "productos"), where("id", "==", Number(productoId)));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const docSnap = querySnapshot.docs[0];
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError("Producto no encontrado.");
        }
      } catch (err) {
        setError("Error al cargar el producto.");
      }
    };
    fetchProducto();
  }, [productoId]);

  if (error) return <div style={{ color: "red" }}>{error}</div>;
  if (!producto) return <div>Cargando...</div>;

  return (
    <div className="item-detail">
      <h2>{producto.name}</h2>
      <img
        src={producto.image || "https://via.placeholder.com/150"}
        alt={producto.name}
        style={{ maxWidth: "300px", display: "block", margin: "20px auto" }}
      />
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "20px" }}>
        <button
          className="btn-agregar"
          onClick={() => addToCart(producto)}
        >
          🛒 Agregar al carrito
        </button>
        <button
          className="btn-volver"
          onClick={() => navigate("/productos#categorias")}
        >
          Ir a productos
        </button>
      </div>
    </div>
  );
};
/*#######################################
              Exportaciones
#########################################*/
export default ItemDetail