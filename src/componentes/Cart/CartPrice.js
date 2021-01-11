import React from 'react';
import Button from 'react-bootstrap/Button';
import Checkout from '../../assets/shopping-bag.svg';
import './Cart.css';

export default function CartPrice({buyPrice}) {
    return (
        <div >
            <div class="card border-info mb-3" style={{ maxWidth:'18rem'}}>
  
                <div class="card-header">TOTAL DE LA COMPRA</div>
  
                <div class="card-body text-info">
    
                    <h1 class="card-title">${buyPrice}</h1>
                    <Button variant="light" >
                        <img src={Checkout} className="orderButton"/>
                        </Button>
  
                </div>
            </div>
        </div>
    )
}
