import React, { useState, useContext} from "react";

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ value = [] , children }) => {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState(value);
  const [isLoading, setLoading] = useState(true);
  const [buyPrice, setBuyPrice] = useState(0)

  function add(books, counter) {
    if (cartItems.some(elem => elem.id === books.id)) {
        const repeatedIndex = cartItems.findIndex(el => el.id === books.id);
        const cartsItemsCopy = [...cartItems]; //spread operator
        cartsItemsCopy[repeatedIndex] = {
          ...cartsItemsCopy[repeatedIndex],
          booksAmount: cartsItemsCopy[repeatedIndex].booksAmount + counter,//Le sumo la cantidad de unidades a pedir
          totalPrice: (parseFloat(cartsItemsCopy[repeatedIndex].totalPrice ) + parseFloat(cartsItemsCopy[repeatedIndex].price)*counter).toFixed(2) //sumo los precios de las unidades a pedir, cada vez que se agregan en el carrito
        };

        setCartItems(cartsItemsCopy);

      } else {
        setCartItems([
          ...cartItems,
          {
            ...books,
            booksAmount:counter,
            price:parseFloat(books.price).toFixed(2),
            totalPrice:(books.price*counter).toFixed(2),
          }
        ]); 
        setCount(count + 1);
      }
      setBuyPrice((parseFloat(buyPrice) + (parseFloat(books.price)*counter)).toFixed(2))
  }

  function borrar (id) {
      const cartsItemsCopy = cartItems.filter(elem => elem.id !== id);
      setCartItems(cartsItemsCopy);
      setCount(count - 1);
      setBuyPrice( (parseFloat(buyPrice) - parseFloat(cartItems.filter(elem => elem.id == id)[0].totalPrice)).toFixed(2))

  }

  

  return (
    <CartContext.Provider value={{ count, add, cartItems, isLoading, setLoading, borrar, buyPrice}}>
      {children}
    </CartContext.Provider>
  );
};