/*#######################################
              Importaciones
#########################################*/
//Modulos
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Estilos
import './index.css';

//Componentes
// import App from './App';
import NavBar from './components/navbar/NavBar.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';
import FooterContainer from './components/footerContainer/FooterContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import Home from './components/home/Home'
// import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs';

//Core
import reportWebVitals from './reportWebVitals';
import Contact from './components/contact/Contact';

/*#######################################
                Logica
#########################################*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <NavBar />
      <br></br>
      <Routes>
        {/* <Route exact path='/*' element={<ItemListContainer greeting="Hola Bienvenido a Volcom👕"/>}/> */}
        <Route exact path='/' element={<Home greeting="Hola! Bienvenido a Volcom🛍️"/>}/>
        <Route exact path='/productos' element={<ItemListContainer/>}/>
        <Route exact path='/productos/:productoId' element={<ItemDetailContainer/>}/>
        <Route exact path='/nosotros' element={<AboutUs/>}/>
        <Route exact path='/contacto' element={<Contact/>}/>
        {/* <ItemListContainer greeting="Hola! Bienvenido a Volcom nuestra tienda🛍️" /> */}
      </Routes>
      <FooterContainer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
