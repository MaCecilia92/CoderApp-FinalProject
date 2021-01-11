import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Checkout from '../../assets/shopping-bag.svg';
import './Cart.css';

export default function CartPrice({buyPrice}) {
    return (
        <div >
            <div className="card border-info mb-3" style={{ maxWidth:'18rem', marginLeft: '8rem'}}>
  
                <div className="card-header">TOTAL DE LA COMPRA</div>
  
                <div className="card-body text-info">
    
                    <h1 className="card-title">${buyPrice}</h1>
                    <Link to="/Checkout">
                    <Button variant="light" >
                        <img src={Checkout} className="orderButton"/>
                        </Button>
                    </Link>
  
                </div>
            </div>
        </div>
    )
}
