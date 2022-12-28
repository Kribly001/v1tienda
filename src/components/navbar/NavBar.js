/*#######################################
              Importaciones
#########################################*/

//Modulos
//Estilos
import './NavBar.css'
//Componentes
import CardWidget from '../cardWidget/CardWidget'
//Core


/*#######################################
                Logica
#########################################*/
const NavBar = (props) => { //Funcion contructora
  return (
    <header>
      <nav className="navbar bg-light fixed-top">
        <div className="container-fluid">
          <img src="/images/logoWeb.png" alt="logo" className='logo' />
          <a href="https://TEMPORAL/PARAQUENO/LARGUEERROR"><CardWidget cantidad="10"></CardWidget></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Volcom</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="https://TEMPORAL/PARAQUENO/LARGUEERROR">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://TEMPORAL/PARAQUENO/LARGUEERROR">Contactanos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://TEMPORAL/PARAQUENO/LARGUEERROR">Quienes Somos</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="https://TEMPORAL/PARAQUENO/LARGUEERROR" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Productos
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="https://TEMPORAL/PARAQUENO/LARGUEERROR">Remeras</a></li>
                    <li><a className="dropdown-item" href="https://TEMPORAL/PARAQUENO/LARGUEERROR">Pantalones</a></li>
                    <li><a className="dropdown-item" href="https://TEMPORAL/PARAQUENO/LARGUEERROR">Zapatillas</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="https://TEMPORAL/PARAQUENO/LARGUEERROR">Todos los productos</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
/*#######################################
              Exportaciones
#########################################*/
export default NavBar