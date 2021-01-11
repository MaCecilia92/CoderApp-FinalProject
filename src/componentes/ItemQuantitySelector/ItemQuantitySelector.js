import React from 'react'; 
import Button from 'react-bootstrap/Button';
import './ItemQuantitySelector.css'

export default function ItemQuantitySelector({counter, onAdd}) {
    return (

             <div  className="CounterContainer">
                <div className="CounterWrap">
                    <Button variant="outline-dark" onClick={ ()=> onAdd('-') }> - </Button>
                        <div className="m-2 font-weight-bold "> {counter} </div>
                    <Button variant="outline-success" onClick={ ()=> onAdd('+') }> + </Button>
                </div>
            </div>
    )
}
