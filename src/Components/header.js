import React from 'react';
import {Link} from 'react-scroll';

const Header=()=>{
  
    return(
        <>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 fixed-top" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">AmasuWeb</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto h5">
        <li className="nav-item ">
        <Link activeClass="active" to="home" spy={true} smooth={true}  offset={50} duration={500} className="nav-link" > Home </Link>
        </li>
        <li className="nav-item">
        <Link activeClass="active" to="members" spy={true} smooth={true}  offset={50} duration={500} className="nav-link" > Members </Link>
        </li>
        <li className="nav-item">
        <Link activeClass="active" to="service" spy={true} smooth={true}  offset={50} duration={500} className="nav-link"> Services </Link>
        </li>
        <li className="nav-item">
        <Link activeClass="active" to="partner" spy={true} smooth={true}  offset={50} duration={500} className="nav-link"> Partners </Link>
        </li>
        <li className="nav-item">
        <Link activeClass="active" to="contact" spy={true} smooth={true}  offset={50} duration={500} className="nav-link"> Contact </Link>
        </li>
       
        
      </ul>
     
    </div>
  </div>
</nav>
        </>
    );
};

export default Header;