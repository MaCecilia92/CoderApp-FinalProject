import React, { useEffect, useState }  from 'react';
import Category from '../componentes/Category/Category';
import { useCartContext } from "../context/CartContext";
import { getFirestore } from '../firebase/index';
import { useParams } from 'react-router-dom';

export default function CategoryContainer() {

    const { categoryKey } = useParams();
    const { setLoading } = useCartContext();
    const [books, setBooks] = useState([])
   
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const categoryCollection = db.collection('categories');
        categoryCollection.get().then((query) => {
            if (query.size === 0) {
                console.log('No tiene resultados')
            }
            return query.docs.find(doc => 
    
                doc.data().key == categoryKey
            
            ).id
            
        }).then((categoryId) => {
            const itemcollection = db.collection("products_books")
            .where("categoryId", "array-contains-any", [categoryId])

            console.log('ci', categoryId)

            itemcollection.get().then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log('No tiene resultados')
                }
            
                setBooks(querySnapshot.docs.map(doc => {
                    const bookid = {
                        ...doc.data(),
                        id: doc.id
                    }
                    return bookid
                }
            
                ));
            
            })
        }).catch((error)=>{
          console.log('error searchig books', error);
        }).finally(()=>{
          setLoading(false)
        });
    }, [categoryKey])
    
    console.log('books', books)

    return (
        <div>
            <Category books={books}/>
        </div>
    )
}
