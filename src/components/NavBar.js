import './NavBar.css';
import CartWidget from '../components/CartWidget/CartWidget'
import { Link } from 'react-router-dom';

const NavBar = () => {
	
	
	return (
		<main>
    <CartWidget/>
      <div>
      <Link to='/' className="navbar-brand" > <h1>BOCHINCHE</h1></Link>
      </div>
    
    
	<nav className="navbar navbar-dark bg-primary">
		<Link to='/category/inflables' className="navbar-brand">Inflables</Link>
		<Link to='/category/toros' className="navbar-brand" >Toros</Link>
		<Link to='/' className="navbar-brand" >BOCHINCHE</Link>
		
  </nav>
    </main>
  );
};

export default NavBar;