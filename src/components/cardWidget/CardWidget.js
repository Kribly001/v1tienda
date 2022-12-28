/*#######################################
              Importaciones
#########################################*/

//Modulos
//Estilos
import './CardWidget.css'
//Componentes
//Core

/*#######################################
                Logica
#########################################*/
const CardWidget = (props) => { //Funcion contructora
    return (
        <header>
            <button type="button" className='btn btn-light'><i className='iconEdit bi bi-cart-plus'></i> {props.cantidad}</button>
            <p>Ver carrito</p>
        </header>
    )
}
/*#######################################
              Exportaciones
#########################################*/
export default CardWidget