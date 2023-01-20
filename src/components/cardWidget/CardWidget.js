/*#######################################
              Importaciones
#########################################*/

//Modulos
//Estilos
import './CardWidget.css'
import Button from 'react-bootstrap/Button';
//Componentes
//Core

/*#######################################
                Logica
#########################################*/
const CardWidget = (props) => { //Funcion contructora
    return (
        <header>
            <Button variant="light"><i className='iconEdit bi bi-cart-plus'></i> {props.cantidad} <p>Ver Carrito</p></Button>{' '}
        </header>
    )
}
/*#######################################
              Exportaciones
#########################################*/
export default CardWidget