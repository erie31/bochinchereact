
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App({category}) {
  
  return  <>
  
    <BrowserRouter>
           <CartWidget/>
           <NavBar />
           <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Nuestras opciones"}/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='*' element={<h1>404NotFound</h1>}/>
           </Routes>
    </BrowserRouter>
 
          </>;
}
export default App;
