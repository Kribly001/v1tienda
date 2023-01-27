/*#######################################
              Importaciones
#########################################*/

//Modulos
//Estilos
import './Contact.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



//Core


/*#######################################
                Logica
#########################################*/
const Contact = (props) => { //Funcion contructora

    return (
        <main>
            <Container className='margin_Top-Contact'>
                <Row>
                    <Col>
                        <Form>
                            <p className='dato-Contact'>Si tienes dudas o consultas deja tus datos te contactaremos cuanto antes</p>
                            <br></br>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Breve Descripcion</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button type="submit">Enviar</Button>
                        </Form>
                    </Col>
                    <Col>
                        <img className='image-Size' src='/images/contactanos1.png' alt='contactanos'></img>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}
/*#######################################
              Exportaciones
#########################################*/
export default Contact