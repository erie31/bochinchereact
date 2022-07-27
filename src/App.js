
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import swal from 'sweetalert';


function App() {
  const onAdd = (qty) => {
    swal(`Ahora tenes ${qty} en tu carrito`);
  };
  return  <>
           <CartWidget/>  
         
           <NavBar />
           <ItemListContainer greeting= "PROMOS"/>
           <ItemCount onAdd={onAdd} initial={1} stock={10} />
    
          </>;
}
export default App;
