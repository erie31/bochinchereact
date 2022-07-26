
import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

import ItemCount from './components/ItemCount';


function App() {
  return  <>
           <CartWidget/>  
           <NavBar />
           <ItemListContainer greeting= "PROMOS"/>
           <ItemCount/>
          </>;
}
export default App;
