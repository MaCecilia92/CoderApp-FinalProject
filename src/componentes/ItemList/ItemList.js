import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Loader from '../../componentes/Loader/Loader';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Detail from '../../assets/information.svg'

import './ItemList.css'


export default function ItemList({books}) {
    return (
        <div>
            <Container className="ContainerCustom">
            {books.length === 0 ? (
                <Loader/>
            ) : (books.map(book =>
                <Card key={book.id} style={{ width: '19rem', margin: '4px' }}>
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
                                <Button variant="light" style={{ width: 'auto', height:'8rem' }}>
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
