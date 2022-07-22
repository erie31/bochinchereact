
import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  return  <>
           <CartWidget/>  
           <NavBar />
           <ItemListContainer greeting= "PROMOS"/>
          </>;
}
export default App;
