import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loader from '../Loader/Loader';
import Badge from 'react-bootstrap/Badge';
import ItemQuantityContainer from '../../containers/ItemQuantityContainer';
import Error from '../Error/Error';

import './ItemDetail.css'


export default function ItemDetail({books, add, counter}) {
    return (
        <div>
            <Container className="ContainerCustom">
                {!books?.categories ? (books?.missing ? (<Error/>)
                    : (<Loader />))
                    : (<Row key={ books.id} className="justify-content-md-center" style={{marginTop:'60px'}}>
                        <Col xs lg="4">
                        <img src={books.imageUrl} className="img-fluid" alt={books.title} style={{backgroundColor:'grey', height:'auto', width:'500px', backgroundImage:`url(${books.imageUrl})`, backgroundPosition:'center'}}/>
                        </Col>
                        <Col lg="5">
                            <h1>{books.title}</h1>
                            <h6>{books.author}</h6>
                            <div className="categoriesCustom">
                                
                                {books.categories.map((c, i) => { return <h5 className="categoriesBadges" key={i}><Badge variant="secondary" >{c}</Badge></h5> })}
                            </div>
                            <hr/>
                            <div className="ItemPrice" >
                                <h5>Precio Unitario:</h5>
                                <Badge pill variant="info">
                                    ${books.price}
                                </Badge>
                            </div>
                            <hr/>
                            <p>{books.description}</p>
                            <ItemQuantityContainer min='0' max={books.stock} add={add} books={books} counter= {counter }/>
                            
                        </Col>
                    
                </Row>)}
                
            </Container>    
        </div>
    )
}
