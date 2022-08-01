
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  
  return  <>
           <CartWidget/>  
         
           <NavBar />
           <ItemListContainer greeting= "PROMOS"/>
           <ItemDetailContainer/>
    
          </>;
}
export default App;
