/*#######################################
              Importaciones
#########################################*/

//Modulos
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//Estilos
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
//Componentes
import CardWidget from '../cardWidget/CardWidget'
import 'bootstrap/dist/css/bootstrap.min.css';
//Core


/*#######################################
                Logica
                 <nav className="navbar bg-light fixed-top">
        <div className="container-fluid">
          <img src="/images/logoWeb.png" alt="logo" className='logo' />
          <a href="https://TEMPORAL/PARAQUENO/LARGUEERROR"><CardWidget cantidad="10"></CardWidget></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
#########################################*/
const NavBar = (props) => { //Funcion contructora
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <Navbar bg="light" expand={false} className="mb-3 fixed-top">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" onClick={handleClose}>
              <img src="/images/logoWeb.png" alt="logo" className="logo" />
            </Link>
          </Navbar.Brand>
          {/* Ícono del carrito dinámico */}
          <Link to="/carrito">
            <CardWidget />
          </Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Tu tienda de confianza
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <Link className="my-link" to="/" onClick={handleClose}>
                  Home
                </Link>
              </Nav>
              <Nav>
                <Link className="my-link" to="/productos" onClick={handleClose}>
                  Productos
                </Link>
              </Nav>
              <Nav>
                <Link className="my-link" to="/nosotros" onClick={handleClose}>
                  Sobre nosotros
                </Link>
              </Nav>
              <Nav>
                <Link className="my-link" to="/contacto" onClick={handleClose}>
                  Contactanos
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

/*#######################################
              Exportaciones
#########################################*/
export default NavBar