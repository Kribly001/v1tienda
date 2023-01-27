/*#######################################
              Importaciones
#########################################*/

//Modulos
import { Link } from 'react-router-dom';
//Estilos
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


//Core


/*#######################################
                Logica
#########################################*/
const Home = (props) => { //Funcion contructora

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
      <br></br><br></br><br></br><br></br>
      <div>
        <div className='carrousel-image'>
          <img className='images-Home' src="/images/marca1-home.png" alt="Imagen 1"/>
        </div>
        <div className='carrousel-image'>
          <img className='images-Home' src="/images/marca2-home.png" alt="Imagen 2"/>
        </div>
        <div className='carrousel-image'>
          <img className='images-Home' src="/images/marca3-home.png" alt="Imagen 3"/>
        </div>
        <div className='carrousel-image'>
          <img className='images-Home' src="/images/marca4-home.png" alt="Imagen 3"/>
        </div>
      </div>
      <br></br><br></br><br></br>
      <div className='description-Sitio'>
        <p>Bienvenido a Volcom, una tienda de ropa en línea con más de 10 años de experiencia en la industria. Ofrecemos una amplia variedad de ropa para hombres, mujeres y niños, desde prendas básicas hasta piezas de moda más elaboradas. Nuestra selección incluye ropa de alta calidad de las mejores marcas, diseñada para durar y adaptarse a todos los estilos. Ofrecemos un servicio de atención al cliente excepcional y envíos rápidos para asegurarnos
           de que obtengas tus compras lo antes posible. ¡Gracias por elegir Volcom para tus compras de ropa!</p>
      </div>
      <br></br><br></br>
      <div className="mb-2 button-Product">
        <Button variant="primary" size="lg">
        <Link className="my-link" to="/productos">Ver Productos</Link>
        </Button>
      </div>
      <img className='adjust-Image' src='/images/ventas-Articulo.png' alt='pagos'></img>
    </main>
  )
}
/*#######################################
              Exportaciones
#########################################*/
export default Home