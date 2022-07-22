import './NavBar.css';


const nav = document.querySelector(".full-screen-nav");

 
const NavBar = () => {

  return (
    <header>
      <div>
        <h1>BOCHINCHE</h1>
      </div>
      <nav className="full-screen-nav">
        <div button onClick={() => nav.classList.remove('open-nav')} className="backdrop"></div>
        <ul>
          <li>
            <a href="#top" className="fas fa-home"> Inicio</a>
          </li>
          <li>
            <a href="#top" className="fas fa-user-alt"> Inflables</a>
          </li>

          <li>
            <a href="#top" className="fas fa-at"> Contacto</a>
          </li>
        </ul>
      </nav>
      <div className="content">
        <div button onClick={() =>nav.classList.add("open-nav")} className="trigger"> <i className="fas fa-bars"></i></div>
      </div>

    </header>
  );
};

export default NavBar;
