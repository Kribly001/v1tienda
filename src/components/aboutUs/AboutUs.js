/*#######################################
              Importaciones
#########################################*/

//Modulos
//Estilos
import './AboutUs.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//Core


/*#######################################
                Logica
#########################################*/
const AboutUs = (props) => { //Funcion contructora

    return (
        <div>
            <Container className='margin-Top_about'>
                <Row>
                    <Col><iframe title='mapsGoogle' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.270508927972!2d-68.84510168555354!3d-32.8910154764028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e091a5d283e49%3A0x87fd5f8f43f50bf1!2sRivadavia!5e0!3m2!1ses!2sar!4v1674780197931!5m2!1ses!2sar" width="400" height="300" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></Col>
                    <Col>
                    <h1 className='font-title'>Volcom👕</h1>
                        <p>Somos una tienda de ropa en línea que ofrece las mejores marcas de moda para hombres y mujeres. Ofrecemos una amplia variedad de ropa, accesorios y calzado de las marcas más populares y de tendencia. Nuestra misión es proporcionar a nuestros clientes una experiencia de compra en línea excepcional con productos de alta calidad y un servicio al cliente excepcional. Estamos comprometidos a ofrecer precios competitivos y una experiencia de compra fácil y
                            segura. Gracias por elegir nuestra tienda en línea para todas sus necesidades de moda.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
/*#######################################
              Exportaciones
#########################################*/
export default AboutUs