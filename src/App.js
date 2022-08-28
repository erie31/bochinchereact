import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {CartContextProvider}  from './context/cartContext'
import Cart from './components/cart';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer';




function App() {
  
  return  <>
  <CartContextProvider>
    <BrowserRouter>
            <NavBar />       
           <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Nuestras opciones"}/>}/>
            <Route path='/detail/:product' element={<ItemDetailContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/cart'element={<Cart/>}/>
            <Route path='*' element={<h1>404NotFound</h1>}/>
            <Route path='/checkout' element={<Checkout />} />
           </Routes>
            <Footer/>
    </BrowserRouter>
  </CartContextProvider>
          </>;
}
export default App;