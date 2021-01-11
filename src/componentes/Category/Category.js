import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Loader from '../../componentes/Loader/Loader';
import { Link } from 'react-router-dom';
import Detail from '../../assets/information.svg'

import './Category.css'

export default function Category({books, isLoading}) {
    return (
        <div>
            <Container className="ContainerCustom">
            { books.length == 0 ? (
                <Loader/>
            ) : (books.map(book =>
                <Card key={book.id} style={{ width: '19rem', height:'36rem', margin: '4px' }}>
                    <img src={book.imageUrl} style={{backgroundColor:'grey', height:'450px', width:'auto', backgroundImage:`url(${book.imageUrl})`, backgroundPosition:'center'}} />
                       
                    <div className="CardCustom">
                    
                    <Card.Body>
                        <Card.Title>
                            {book.title}
                        </Card.Title>
                        <Card.Text>
                            {book.author}
                        </Card.Text>
                        </Card.Body>
                        <Card.Text className="CardFooter">
                            <Link to={`/item/${book.id}`}>
                                <Button variant="light" style={{ width: 'auto', height:'7.7rem' }}>
                                <img className="detailButton"  src={Detail} alt="Detail-button" /> 
                                </Button>
                            </Link> 
                        </Card.Text>
                    </div>
                        </Card>)
                    )}
                
            </Container>    
        </div>
    )
}
