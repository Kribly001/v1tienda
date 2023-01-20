/*#######################################
              Importaciones
#########################################*/

//Modulos
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
  return (
    <header>
      <>
        {[false].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="mb-3 fixed-top">
            <Container fluid>
              <Navbar.Brand><img src="/images/logoWeb.png" alt="logo" className='logo' /></Navbar.Brand>
              <a href="#action"><CardWidget cantidad="10"></CardWidget></a>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Volcom-Tu tienda de confianza👕
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Sobre nosotros</Nav.Link>
                    <Nav.Link href="#action2">Contactanos</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    </header>
  )
}
/*#######################################
              Exportaciones
#########################################*/
export default NavBar