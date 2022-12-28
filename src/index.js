/*#######################################
              Importaciones
#########################################*/
//Modulos
import React from 'react';
import ReactDOM from 'react-dom/client';

//Estilos
import './index.css';

//Componentes
// import App from './App';
import NavBar from './components/navbar/NavBar.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';

//Core
import reportWebVitals from './reportWebVitals';

/*#######################################
                Logica
#########################################*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <ItemListContainer greeting="Hola! Bienvenido a Volcom nuestra tienda🛍️"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
