import React from 'react';
import NavBar from './componentes/NavBar/NavBar';
import HomeContainer from './containers/HomeContainer';
import ItemListContainer from './containers/ItemListContainer';
import Footer from './componentes/Footer/Footer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import CartContainer from './containers/CartContainer';
import CategoryContainer from './containers/CategoryContainer';
import CheckOutContainer from './containers/CheckOutContainer';


import { CartProvider } from "./context/CartContext";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
        <Switch>
          <Route exact path='/' render={() => <HomeContainer />} />
          <Route path='/Catalogo' render={() => <ItemListContainer />} />
          <Route path='/item/:id' render={() => <ItemDetailContainer />} />
          <Route path='/Cart' render={() => <CartContainer />} />
          <Route path='/Categories/:categoryKey' render={() => <CategoryContainer />} />
          <Route path='/Checkout' render={()=><CheckOutContainer/>}/>
        </Switch>
    <Footer/>  
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
