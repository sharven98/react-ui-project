import React from 'react';


const Navbar = (props) => {
  return ( 
    <div>
        
    <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#" style={{color:"orangered"}} >
               BURGER MASTER
            </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto mr-3">
          <li className="nav-item mr-4">
            <a className="nav-link" href="#menu">MENU <span class="sr-only">(current)</span></a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link" href="#about">DOWNLOAD OUR APP</a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link" href="#pricing">LOGIN</a>
          </li>
          <li className="nav-item mr-4">
          <button className="btn btn-md" style={{backgroundColor:"orangered", color:"white"}} >SIGN UP</button>
          </li>
        </ul>
      </div>
    </nav>
</div>
   );
}
 
export default Navbar;

