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

  const brandImages = [
    "/images/marca1-home.png",
    "/images/marca2-home.png",
    "/images/marca3-home.png",
    "/images/marca4-home.png",
  ];

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
        {brandImages.map((src, index) => (
          <div className="carrousel-image" key={index}>
            <img className="images-Home" src={src} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </div>
      <br></br><br></br><br></br>
      <div className='description-Sitio'>
        <p>Bienvenido a Techteno, tu tienda en línea especializada en tecnología. Con más de 5 años de experiencia, ofrecemos una amplia gama de productos tecnológicos de última generación, desde auriculares y smartwatch hasta accesorios y gadgets innovadores. Trabajamos con las mejores marcas del mercado para garantizar calidad y rendimiento en cada producto. Nuestro compromiso es brindarte un servicio excepcional, envíos rápidos y asesoramiento personalizado para que encuentres justo lo que necesitas. ¡Gracias por elegir Techteno como tu aliado en tecnología!</p>
      </div>
      <br></br><br></br>
      <div className="mb-2 button-Product">
        <Button variant="primary" size="lg">
          <Link className="my-link" to="/productos#categorias">
            <i className="bi bi-cart"></i> Ver Productos
          </Link>
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