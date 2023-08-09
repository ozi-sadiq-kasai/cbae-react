import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';


function Navbar() {
  const location = useLocation();
  const { pathname } = location;

function handleInstagramClick() {
  window.open('https://www.instagram.com/cbaerestaurant.grill/', '_blank');
}

 const phoneNumber =  '08133336868'

function handlePhoneNumber(){

  window.open(`tel:${phoneNumber}`, '_blank');
}

  return (
    <nav className="navbar">
      <div className="nav-header">
        <div className="nav-links">
          <Link to="/" className={pathname === '/' ? 'active' : ''}style={{fontSize:'1.5rem'}}>
            Main
          </Link>
          <Link to="/drinks" className={pathname === '/drinks' ? 'active' : ''} style={{fontSize:'1.5rem'}}>
            Drinks
          </Link>
          <Link to="/dessert" className={pathname === '/dessert' ? 'active' : ''} style={{fontSize:'1.5rem'}}>
            Dessert
          </Link>
        </div>
        <div className="nav-icons">
          <FaInstagram onClick={handleInstagramClick} rel="noopener noreferrer" target="_blank" size={25}/>
          <BsTelephone onClick={handlePhoneNumber} size={25} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
