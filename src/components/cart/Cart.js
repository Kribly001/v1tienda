import React from "react";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  console.log("Contenido del carrito:", cart);

  // Calcular el total del carrito
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>Producto</th>
                <th style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>Cantidad</th>
                <th style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>Precio</th>
                <th style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>Subtotal</th>
                <th style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td style={{ padding: "10px", textAlign: "center" }}>{item.name}</td>
                  <td style={{ padding: "10px", textAlign: "center" }}>{item.quantity}</td>
                  <td style={{ padding: "10px", textAlign: "center" }}>${item.price}</td>
                  <td style={{ padding: "10px", textAlign: "center" }}>${item.price * item.quantity}</td>
                  <td style={{ padding: "10px", textAlign: "center" }}>
                    <button
                      style={{
                        background: "red",
                        color: "white",
                        border: "none",
                        padding: "5px 10px",
                        cursor: "pointer",
                        borderRadius: "5px",
                      }}
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: "20px", textAlign: "right" }}>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
                borderRadius: "5px",
                marginTop: "10px",
              }}
              onClick={clearCart}
            >
              Vaciar Carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;