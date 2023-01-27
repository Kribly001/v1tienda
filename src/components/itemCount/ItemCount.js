/*#######################################
              Importaciones
#########################################*/

//Modulos
import { useState } from 'react'
//Estilos
import './ItemCount.css'
//Componentes
import Button from 'react-bootstrap/Button';

//Core


/*#######################################
                Logica
#########################################*/
const ItemCount = (props) => { //Funcion contructora

    const [count, setCount] = useState(0)

    //Funcion suma uno con un maximo de stock

    const addOne = () => {
        if (count < props.stock) {
            setCount(count + 1)
        }
    }

    //Funcion de restar uno al contador seteando un minimo

    const disOne = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    //Funcion agregar x cantidad de productos
    // const onAdd = () => {
    //     console.log(count)
    // }

    return (
        <>
            <div className='box-count'>
                <div className='box-count-children'>
                    <Button className='boton-style' variant='dark' onClick={disOne} as="input" type="button" value="--" />
                    <p>{count}</p>
                    <Button className='boton-style' variant='dark' onClick={addOne} as="input" type="button" value="+" />
                </div>
            </div>

        </>

    )
}
/*#######################################
              Exportaciones
#########################################*/
export default ItemCount