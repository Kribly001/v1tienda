/*#######################################
              Importaciones
#########################################*/

//Modulos
import { useState, useEffect } from 'react';
//Estilos
import Carousel from 'react-bootstrap/Carousel';
import './ItemListContainer.css';

//Componentes
import ItemList from '../itemList/ItemList';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

/*#######################################
                Logica
#########################################*/
const ItemListContainer = (props) => { //Funcion contructora

  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    cambiarCategoriaTodo(); // Por defecto, mostrar "Todo"
  }, []);

  // Funciones para cambiar la categoría
  const cambiarCategoria = (nombreCategoria) => {
    setCategoryName(nombreCategoria);
  };

  const cambiarCategoriaTodo = () => {
    setCategoryName("Todo");
  };

  return (
    <main>
      <br /><br /><br />
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
          placeholder="¿Qué desea comprar hoy?"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Buscar</Button>
      </Form>
      <div className='buttons-Search'>
        <Button variant="light" onClick={cambiarCategoriaTodo}>Todo</Button>
        <Button variant="light" onClick={() => cambiarCategoria("Camaras")}>Cámaras</Button>
        <Button variant="light" onClick={() => cambiarCategoria("Informatica")}>Informática</Button>
        <Button variant="light" onClick={() => cambiarCategoria("Accesorios")}>Accs Celular</Button>
        <Button variant="light" onClick={() => cambiarCategoria("Audio")}>Audio</Button>
        <Button variant="light" onClick={() => cambiarCategoria("Belleza")}>Belleza</Button>
        <Button variant="light" onClick={() => cambiarCategoria("Mascotas")}>Mascotas</Button>
        <Button variant="light" onClick={() => cambiarCategoria("Iluminacion")}>Iluminación</Button>
        <Button variant="light" onClick={() => cambiarCategoria("Juguetes")}>Juguetes</Button>
        <Button variant="light" onClick={() => cambiarCategoria("Electrodomesticos")}>Electrodomésticos</Button>
        <Button variant="light" onClick={() => cambiarCategoria("Herramientas")}>Herramientas</Button>
        <Button variant="light" onClick={() => cambiarCategoria("Vehiculos")}>Vehículos</Button>
        <Button variant="light" onClick={() => cambiarCategoria("Botellas")}>Botellas</Button>
      </div>
      <ItemList category={categoryName} />
    </main>
  );
};

/*#######################################
              Exportaciones
#########################################*/
export default ItemListContainer;