/*#######################################
              Importaciones
#########################################*/

//Modulos
//Estilos
import Carousel from 'react-bootstrap/Carousel';
import './ItemListContainer.css'
import { useState } from 'react'
//Componentes
import FooterContainer from '../footerContainer/FooterContainer'
import ItemList from '../itemList/ItemList'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//Core


/*#######################################
                Logica
#########################################*/
const ItemListContainer = (props) => { //Funcion contructora

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
          <Button variant="light" onClick={cambiarCategoriaTodo}>Todo</Button>
          <Button variant="light" onClick={cambiarCategoriaRemeras}>Remeras</Button>
          <Button variant="light" onClick={cambiarCategoriaPantalones}>Pantalones</Button>
          <Button variant="light" onClick={cambiarCategoriaZapatillas}>Zapatillas</Button>
          </div>
      <ItemList category={categoryName}/>
      <FooterContainer />
    </main>
  )
}
/*#######################################
              Exportaciones
#########################################*/
export default ItemListContainer