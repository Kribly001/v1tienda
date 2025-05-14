import React from "react";
import { useCart } from "../../context/CartContext";
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">El carrito está vacío.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button className="btn-remove" onClick={() => removeFromCart(item.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-footer">
            <h3 className="cart-total">Total: ${totalPrice.toFixed(2)}</h3>
            <button className="btn-clear" onClick={clearCart}>
              Vaciar Carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
