import React from "react";
import { useCart } from "../../context/CartContext";

const CartIcon = () => {
  const { cart } = useCart();

  // Calcular la cantidad total de productos en el carrito
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div style={{ position: "relative", cursor: "pointer", display: "inline-block" }}>
      {/* Imagen del carrito */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" // URL del ícono de carrito
        alt="Carrito"
        style={{ width: "30px", height: "30px" }}
      />
      {/* Contador de productos */}
      {totalItems > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-5px",
            right: "-10px",
            background: "red",
            color: "white",
            borderRadius: "50%",
            padding: "5px 8px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartIcon;