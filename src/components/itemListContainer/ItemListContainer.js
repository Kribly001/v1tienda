/*#######################################
              Importaciones
#########################################*/

//Modulos
//Estilos
import './ItemListContainer.css'
//Componentes
import FooterContainer from '../footerContainer/FooterContainer'

//Core


/*#######################################
                Logica
#########################################*/
const ItemListContainer = (props) => { //Funcion contructora
  return (
    <main>
      <div className='saludo'>
      <p>{props.greeting}</p>
      </div>
    <FooterContainer/>
    </main>
  )
}
/*#######################################
              Exportaciones
#########################################*/
export default ItemListContainer