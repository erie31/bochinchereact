import './NavBar.css';
import CartWidget from '../components/CartWidget/CartWidget'
import { Link } from 'react-router-dom';

const NavBar = () => {
	
	
	return (
		<main>
    <CartWidget/>
      <div>
        <h1>BOCHINCHE</h1>
      </div>
    
    
	<nav className="navbar navbar-dark bg-dark">
		<Link to='/category/inflables' className="navbar-brand">Inflables</Link>
		<Link to='/category/toros' className="navbar-brand" >Toros</Link>
		<Link to='/' className="navbar-brand" >BOCHINCHE</Link>
		
  </nav>
    </main>
  );
};

export default NavBar;