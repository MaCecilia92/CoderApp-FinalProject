import React, { useState } from 'react';
import { getFirestore } from '../firebase/index';
import { useCartContext } from "../context/CartContext";
import  firebase from 'firebase/app';
import 'firebase/firestore';
import CheckoutForm from '../componentes/Checkout/CheckoutForm';
import CheckoutCart from '../componentes/Checkout/CheckoutCart';
import Error from '../componentes/Error/Error'

export default function CheckOutContainer() {

    const [orderId, setOrderId] = useState('');

    const { cartItems, buyPrice, setLoading } = useCartContext();

    const [submittedData, setSubmittedData] = useState({});


    console.log('orderCart', cartItems)

    const onSubmit = (data) => {
           const buyerInfo = {
            name: data.firstName,
            apellido:data.lastName,
            email:data.email,
            direccion:data.direccion,
            provincia:data.provincia,
            ciudad:data.ciudad,
            telefono:data.telefono,
        }

        setSubmittedData(data)
        console.log('buyer', buyerInfo)
        
        const orderItems = cartItems.map(item=>{
            return {
                amounts:item.booksAmount,
                id:item.id,
                price:parseFloat(item.price),
                title:item.title,
                totalPrice:parseFloat(item.totalPrice),
            }
        })

        const db = getFirestore();
        const orders = db.collection('orders');
        const newOrder = {
            estado:"generada",
            buyer: buyerInfo,
            items: orderItems, 
            total: parseFloat(buyPrice),
            date: firebase.firestore.Timestamp.fromDate(new Date()),

        };
        console.log('order', newOrder)
        orders.add(newOrder).then(({id})=>{
            setOrderId(id)
        }).catch(err => {
            throw err;
        }).finally(
            setLoading(false)
        )

        console.log('buyer', newOrder);
        console.log('orderId', orderId)
};
    return (
        <div  >
            {cartItems.length === 0 ? (<Error />) : (
                <div className="ContainerCustom">
                    <CheckoutForm onSubmit={onSubmit} orderId={orderId} submittedData={submittedData }/> 
                    <CheckoutCart cartItems={cartItems} buyPrice={buyPrice} />
                </div>
            )}
            
        </div>
    )
}
