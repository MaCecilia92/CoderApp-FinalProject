import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Borrar from '../../assets/bin.svg';
import Button from 'react-bootstrap/Button';
import './Cart.css'

export default function CartDetail({cartItems, borrar}) {
    return (
        <div>
                {cartItems.length == 0 ? (
                    <div style={{ margin: 'auto' }} >
                        <span className="text-center">Necesitas agregar items al carrito </span>
                        <Link className="text-danger stretched-link" exact to="/Catalogo">
                            Ver Catalogo
                        </Link>
                    </div>) : (cartItems.map(libro =>
                        <Row key={libro.id} style={{ width: '30rem', margin: '25px' }}>
    
                            <Col xs={4}>
                                <img src={libro.imageUrl} style={{backgroundColor:'grey', height:'200px', width:'auto', backgroundImage:`url(${libro.imageUrl})`, backgroundPosition:'center'}} />
                            </Col>
        
                            <Col xs={7} >
                                <div style={{height: '120px'}}>
                                    <h3>{libro.title}</h3>
                                    <h6 className="card-descripcion text-left">{libro.author}</h6>
                                </div>
                                <div>
                                    <small className="card-descripcion text-left">Agregaste <span className="font-weight-bold" >{libro.booksAmount}</span> unidades al carrito</small>
                                    <hr/>
                                    <div className=" d-flex justify-content-end" style={{ marginTop:'1rem'}}>
                                        <span className="font-weight-bold" style={{ fontSize: '1.5rem' }}>${libro.totalPrice}</span>
                                        <Button variant="light" style={{ marginLeft: '1.5rem' }} onClick={() => { borrar(libro.id) }}>
                                            <img className="borrarItem" src={Borrar} alt="Borrar-item-Button"/>
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                </Row>))}
           
        </div>
    )
}
