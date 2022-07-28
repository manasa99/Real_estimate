import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import Button from "../components/Button"
import { Link } from 'react-router-dom';
import Popup from "./Popup"; 
import Login from "../components/forminput/Login"
import Signup from "../components/forminput/Signup"
import Signinout from './forminput/Signinout'
import './Navbar.css';
import Btn from "./Btn"


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [isLoggedIn, setLogin] = useState(true);
  const [openPopup, setOpenPopup] = useState(false)

  const [Authenticated, setAuthentication] = useState(false)
  const userset = () => {
    setLogin(current => !current);
    setAuthentication(true)
  }  
  const toggleIsLogin = () => {
    
    setLogin(current => !current);
    setOpenPopup(true)
    // return (
    // <Login/>)
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const test = () =>{
    setOpenPopup(true)
    return(<Signinout
      openPopup = {openPopup}
      setOpenPopup = {setOpenPopup}
      userset= {userset}
    />)
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Real Estimate
            <img className="logo" src='/images/houselogo.png' alt='logo for real estimator application'/>
            {/* <i class='fab fa-typo3' /> */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/search'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Search
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/estimator'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Estimator
              </Link>
            </li>
            
            {isLoggedIn && 
            <li className='nav-item'>
              <Link
                to='/profile'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Account
              </Link>
            </li>}
           
          </ul>
          {/* <button onClick={test}>login</button> */}
          <div>
          <div >

            {!isLoggedIn && 
            <Btn
              type="" 
              text="Login"
              onClick={() => { setOpenPopup(true); } } />}
            {openPopup && 
            <div className='loginform'>
            <Signinout
                openPopup = {openPopup}
                setOpenPopup = {setOpenPopup}
                userset= {userset}
              />
            </div>
            }
            
            {isLoggedIn && 
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            <Btn
              type="" 
              text="Logout"
              onClick={() => { setLogin(current => !current); } } />
            </Link>
            } 

            
          </div>
          </div>
          {/* {button && <Button buttonStyle='btn--outline' onClick={toggleIsLogin}>
            {isLoggedIn ?
            'SP' :
            <a class="ej-at button text ej_af" href="../components/forminput/Login.js" >
              login
            </a>
            }
          </Button>} */}

          
          

        </div>
      </nav>
    </>
  );
}

export default Navbar;
