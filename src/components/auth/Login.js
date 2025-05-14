import React from "react";
import { auth, googleProvider } from "../../firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const Login = ({ onLogin }) => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Usuario logueado:", user);
      onLogin(user); // Llama a la función de callback con los datos del usuario
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      alert("Hubo un problema al iniciar sesión. Inténtalo de nuevo.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Inicia sesión para continuar</h2>
      <button
        onClick={handleLogin}
        style={{
          backgroundColor: "#4285F4",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Iniciar sesión con Google
      </button>
    </div>
  );
};

export default Login;