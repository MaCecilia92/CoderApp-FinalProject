import React from 'react';
import { useCartContext } from "../context/CartContext";
import CartDetail from '../componentes/Cart/CartDetail';
import CartPrice from '../componentes/Cart/CartPrice';

export default function CartContainer() {

    const { cartItems, borrar, buyPrice } = useCartContext();
    console.log(cartItems)

    return (
        <div className="ContainerCustom">
            <CartDetail cartItems={cartItems} borrar={borrar} />
            <CartPrice buyPrice={buyPrice}/>
        </div>
    )
}
