
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer';


function App() {
  
  return  <>
           <CartWidget/>  
         
           <NavBar />
           <ItemListContainer greeting= "PROMOS"/>
           
    
          </>;
}
export default App;
