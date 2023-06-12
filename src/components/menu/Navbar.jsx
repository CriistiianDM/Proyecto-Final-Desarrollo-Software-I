import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Dropdown from './Dropdown';
import { MenuItems } from './NavItems';

function Navbar() {
  const [click, setClick] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = (menu) => {
    if (window.innerWidth >= 960) {
      setActiveMenu(menu);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth >= 960) {
      setActiveMenu(null);
    }
  };

  useEffect(() => {
    const navbar = document.querySelector('.navbar');

    navbar.addEventListener('mouseleave', onMouseLeave);

    return () => {
      navbar.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <>
      <nav className='navbar'>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
              Inicio
            </Link>
          </li>

          {MenuItems.map((item, index) => (
            <li
              key={index}
              className='nav-item'
              onMouseEnter={() => onMouseEnter(item.title.toLowerCase())}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to={item.path}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {item.title} <i className='fas fa-caret-down' />
              </Link>
              {activeMenu === item.title.toLowerCase() && (
                <Dropdown options={item.dropdownItems} />
              )}
            </li>
          ))}

          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Reparacion
            </Link>
          </li>

          <li
            className='nav-item'
            onMouseEnter={() => onMouseEnter('idioma')}
            onMouseLeave={onMouseLeave}
          >
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Idioma <i className='fas fa-caret-down' />
            </Link>
            {activeMenu === 'idioma' && <Dropdown />}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;