import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
	
	
	return (
		<main>
      <div>
        <h1>BOCHINCHE</h1>
      </div>
    <div className="content">
    </div>
	
	<nav className="navbar navbar-dark bg-dark">
		<Link to='/category/inflables' className="navbar-brand">Inflables</Link>
		<Link to='/category/toros' className="navbar-brand" >Toros</Link>
		<Link to='/' className="navbar-brand" >Contacto</Link>
		
     
</nav>
    
    </main>
  );
};

export default NavBar;