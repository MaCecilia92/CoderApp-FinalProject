import React from 'react';
import Button from 'react-bootstrap/Button';

export default function AddItemButton({counter, add, books}) {
    return (
        <div>

            { counter > 0 ? <Button variant="warning" onClick={()=>{add(books, counter)}}> Quiero {counter}</Button>:<Button variant="outline-secondary" disabled>Comprar</Button>}
        
        </div>
    )
}
