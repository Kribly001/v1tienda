/*#######################################
              Importaciones
#########################################*/

//Modulos
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
//Estilos
import './ItemDetailContainer.css'
//Componentes
import ItemDetail from '../itemDetail/ItemDetail'
//Core


/*#######################################
                Logica
#########################################*/
const ItemDetailContainer = () => { //Funcion contructora

  const { productoId } = useParams()

  useEffect(() => {
    console.log(`Inicio producto con Id ${productoId}`);
    return () => {
      console.log(`Finalizo renderizado del producto con id ${productoId}}`);
    }
  }, [productoId])
  return (
    <section className='itemDetail-box'>
      <ItemDetail />
    </section>
  )
}
/*#######################################
              Exportaciones
#########################################*/
export default ItemDetailContainer