import React from 'react';
import Card from 'react-bootstrap/Card';
import CheckoutCard from '../Checkout/CheckoutCard';


export default function CheckoutCart({cartItems, buyPrice}) {
    return (
        <div>
            <Card variant="info" style={{ width: '30rem', marginTop: '40px', marginLeft: '20px' }}>
                <Card.Header>
                    <h5>Total de la compra</h5>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                    <h1 className="text-center">${buyPrice}</h1>  
                    </Card.Text>
                </Card.Body>
            </Card>
            <CheckoutCard cartItems={cartItems} />
        </div>
    )
}
