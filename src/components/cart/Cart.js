import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { useLocation } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const location = useLocation();

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    dni: "",
    telefono: "",
    email: "",
    direccion: "",
    ciudad: "",
    provincia: "",
    codigoPostal: "",
    metodoPago: "mercado_pago"
  });

  useEffect(() => {
    if (location.hash === "#inicioCarrito") {
      const element = document.getElementById("inicioCarrito");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleComprar = () => setShowForm(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://createpreference-jizba2lz4q-uc.a.run.app", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, cart })
    });

    const data = await response.json();
    if (data.init_point) {
      window.location.href = data.init_point;
    } else {
      alert("Error al conectar con Mercado Pago");
    }
  };

  return (
    <div className="cart-container" id="inicioCarrito">
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
            <button className="btn-clear" onClick={clearCart}>Vaciar Carrito</button>
            <button className="btn-comprar" onClick={handleComprar}>Comprar</button>
          </div>

          {showForm && (
            <form className="form-direccion" onSubmit={handleSubmit}>
              <h3 className="form-title">📦 Datos de Envío</h3>

              <input type="text" name="nombre" placeholder="Nombre completo" value={formData.nombre} onChange={handleChange} required />
              <input type="text" name="dni" placeholder="DNI" value={formData.dni} onChange={handleChange} required />
              <input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} required />
              <input type="text" name="direccion" placeholder="Dirección de envío" value={formData.direccion} onChange={handleChange} required />
              <input type="text" name="ciudad" placeholder="Ciudad" value={formData.ciudad} onChange={handleChange} required />
              <input type="text" name="provincia" placeholder="Provincia" value={formData.provincia} onChange={handleChange} required />
              <input type="text" name="codigoPostal" placeholder="Código Postal" value={formData.codigoPostal} onChange={handleChange} required />

              <select name="metodoPago" value={formData.metodoPago} onChange={handleChange} required>
                <option value="mercado_pago">Mercado Pago</option>
                <option value="transferencia">Transferencia bancaria</option>
              </select>

              <button type="submit" className="btn-comprar">Confirmar compra</button>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
