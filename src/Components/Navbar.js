import { click } from '@testing-library/user-event/dist/click';
import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Button';
import './Navbar.css';

function Navbar() {
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true)

    const handleClick=() => setClick(!click);
    const closeMobileMenu=() =>setClick(false);

    const showbutton = () => {
        if(window.innerWidth <= 960)
            {
                setButton(false);
            }
            else
            {
                setButton(true);
            }
    };

    useEffect(() => {
        showbutton();
    }, []);

    window.addEventListener('resize',showbutton);

  return (
    <>
        <nav className='navbar'>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Future Vault <i className='fab fa-typo3' />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' >
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Services' className='nav-links' >
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Products' className='nav-links' >
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/signup' 
                        className='nav-links'
                        onClick={closeMobileMenu} >
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && (
                    <Link to='/signup'>
                    <Button buttonStyle='btn--outline' onClick={() => console.log('Button Clicked')}>SIGN UP</Button>
                    </Link>
                )}
            </div>
        </nav>
    </>
  )
}

export default Navbar