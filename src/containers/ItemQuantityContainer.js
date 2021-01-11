import React, {useState} from 'react';
import ItemQuantity from '../componentes/ItemQuantitySelector/ItemQuantitySelector';
import AddItemButton from '../componentes/AddItemButton/AddItemButton';
import '../componentes/ItemQuantitySelector/ItemQuantitySelector.css'

export default function ItemQuantityContainer({ min, max, add, books }) {
    
    
    const [counter, setCounter] = useState(0);

    const onAdd = (sign)=> {
        if ( (sign === '+') && (counter < max) ) setCounter(counter+1)
        else if ( (sign === '-') && (counter > min) ) setCounter(counter-1)
    }

    return (
        <div className="ItemQuantityContainer" >
            <ItemQuantity counter={counter}  onAdd={onAdd} />
            <AddItemButton counter={counter}  add={add} books={books}/> 
        </div>
    )
}
