import React from 'react';
import Container from 'react-bootstrap/Container';
import './Footer.css'

export default function Footer() {
    const anio = new Date().getFullYear();

    return (
        <div>
            <Container fluid className="footerCustom" >
                    <small>  &copy; Cecilia Alegre {anio}</small>
            </Container>
        </div>
    )
}
