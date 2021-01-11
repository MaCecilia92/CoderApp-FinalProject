import React from 'react';
import ErrorImg from '../../assets/owl.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Error.css';

export default function Error() {
    return (
        <div>
            <Container className="ContainerCustom">
            <Row style={{marginTop:'90px', width:'900px'}}>
                        <Col lg="4">
                            <img className="errorImg" src={ErrorImg} alt="Error-not-found" />
                        </Col>
                        <Col  lg="8" >
                        <div>
                            <h1>
                                Ups! Algo salio mal
                            </h1>
                            <h5>Intenta nuevamente en unos minutos</h5>
                               
                           </div>
                        </Col>
                </Row>
            </Container>
        </div>
    )
}
