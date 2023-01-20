/*#######################################
              Importaciones
#########################################*/

//Modulos
import { useState } from 'react'
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
//Estilos
import Carousel from 'react-bootstrap/Carousel';
import './ItemListContainer.css'

//Componentes
import ItemList from '../itemList/ItemList'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//Core


/*#######################################
                Logica
#########################################*/
const ItemListContainer = (props) => { //Funcion contructora

  // const {productoId} = useParams();
  // useEffect(()=>{
  //   console.log(productoId + "  Renderizado")
  //   return () => {
  //     console.log(productoId + `${productoId} Fin Renderizado`)
  //   }
  // },[productId])

  const [categoryName, setCategoryName] = useState("")

 const cambiarCategoriaRemeras = (nombreCategoria) =>{
  setCategoryName("Remeras")
 }

 const cambiarCategoriaPantalones = (nombreCategoria) =>{
  setCategoryName("Pantalones")
 }

 const cambiarCategoriaZapatillas = (nombreCategoria) =>{
  setCategoryName("Zapatillas")
 }

 const cambiarCategoriaTodo  = () =>{
  setCategoryName("Todo")
 }

  return (
    <main>
      <br></br><br></br><br></br>
      <div className='carrouzel-Edition'>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 size-Image"
              src="/images/carrouzel-1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 size-Image"
              src="/images/carrouzel-2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 size-Image"
              src="/images/carrouzel-3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='saludo'>
        <p>{props.greeting}</p>
      </div>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Que desea comprar hoy?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div className='buttons-Search'>
            <p>Que categoria deseas ver hoy?</p>
          <Button variant="light" onClick={cambiarCategoriaTodo}>Todo</Button>
          <Button variant="light" onClick={cambiarCategoriaRemeras}>Remeras</Button>
          <Button variant="light" onClick={cambiarCategoriaPantalones}>Pantalones</Button>
          <Button variant="light" onClick={cambiarCategoriaZapatillas}>Zapatillas</Button>
          </div>
      <ItemList category={categoryName}/>
    </main>
  )
}
/*#######################################
              Exportaciones
#########################################*/
export default ItemListContainer