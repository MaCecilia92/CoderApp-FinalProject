import React, {useEffect, useState}  from 'react';
import ItemDetail from '../componentes/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { useCartContext } from "../context/CartContext";

import 'firebase/firestore';
import { getFirestore } from '../firebase/index';


export default function ItemDetailContainer() {
    
    const { id } = useParams();

    const { add, setLoading } = useCartContext();

    const [books, setBooks] = useState({})
    

    let bookObject;

    useEffect(() => {
        const db = getFirestore();
        const booksCollection = db.collection('products_books')
        const bookFind = booksCollection.doc(id);
        const categories = db.collection('categories');
        


        bookFind.get().then(doc =>{
            if(!doc.exists){
                console.log('book not found')
                bookObject = { missing: true }
                return 
            }
            console.log('item found');

            const categoryKeys = []

            doc.data().categoryId.map(ids => {
                categories.doc(ids).get().then(category => {
                    categoryKeys.push(category.data().key)
                })
            })

        
            bookObject = { 
                id: doc.id,
                categories: categoryKeys,
                ...doc.data(),
                price: doc.data().price.toFixed(2)
            }
            

        }).catch(error=>{
            console.log('error searching book', error)
        }).finally(()=>{
            setTimeout(()=>{setBooks(bookObject);}, 1000)
            setLoading(false)
        })


    }, [])
    

    return (
        <div>
            <ItemDetail books={books}  add={add} />
        </div>
    )
}
