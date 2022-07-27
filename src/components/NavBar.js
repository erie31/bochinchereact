import './NavBar.css';

const NavBar = () => {
	
	const nav = document.querySelector('.full-screen-nav');
	return (
		<main>
      <div>
        <h1>BOCHINCHE</h1>
      </div>
    <div className="content">
		<button onClick={()=> nav.classList.add("open-nav")} className="trigger"><i className="fas fa-bars"></i></button>
    </div>
      <nav className="full-screen-nav">
			<div onClick={()=>nav.classList.remove("open-nav backdrop")} className="backdrop"></div>
			<ul>
				<li>
					<a href="#top"><i className="fas fa-home"></i> Home</a>
				</li>
				
				<li>
					<a href="#top"><i className="fas fa-tasks"></i> Projects</a>
				</li>
				
				<li>
					<a href="#top"><i className="fas fa-at"></i> Contact</a>
				</li>
			</ul>
		</nav>
    
    </main>
  );
};

export default NavBar;