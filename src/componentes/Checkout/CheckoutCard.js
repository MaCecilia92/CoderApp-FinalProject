import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function CheckoutCard({ cartItems }) {
    
    return (
        <div>
            {cartItems.map(libro =>
                        
                        <Card key={libro.id} border="info" style={{ width: '30rem', marginTop: '40px', marginLeft: '20px' }}>
                            <Row  style={{ width: '30rem', margin: '25px' }}>
        
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
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>)}
        </div>
    )
}
