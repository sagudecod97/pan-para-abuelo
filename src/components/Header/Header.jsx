import React, { useState } from 'react';
import './Header.scss';

import IconComponent from '../IconComponent/IconComponent';
import Link from '../Link/Link';

import PanParaAbueloLogo from '../../assets/images/pan-para-abuelo-logo.png';

const Header = () => {
  const [openNavitation, setOpenNavigation] = useState(false);
  
  const openNavigationHandler = () => {
    setOpenNavigation(!openNavitation)
  };

  return (
    <header 
      className='header'
    >
      <a 
        className='header__logo'
        href='/'
      >
        <img
          className='header__logo-img'
          alt="Fundación Pan para un Abuelo"
          src={PanParaAbueloLogo}
        />
      </a>

      <button
        onClick={openNavigationHandler}
        className='header__menu'
        aria-label='Menú de navegación'
      >
        <IconComponent 
          className='header__menu-icon'
          icon='menu'
        />
      </button>

      <nav
        className={`
        navigation
        ${!openNavitation ? '--hidden' : ''}
        `}
        hidden={!openNavitation ? true : false}
      >
        <ul
          className='navigation__list'
        >
          <li
            className={`
            navigation__list-item
            --animation
            `}
          >
            <Link
              href="/"
            >
              Inicio
            </Link>
          </li>

          <li
            className={`
            navigation__list-item
            --animation
            `}
          >
            <Link
              href="/"
            >
              Quienes Somos
            </Link>
          </li>

          <li
            className={`
            navigation__list-item
            --animation
            `}
          >
            <Link
              href="/"
            >
              Contactenos
            </Link>
          </li>


          <li
            className={`
            navigation__list-item
            --animation
            `}
          >
            <Link
              href="/"
            >
              Eventos
            </Link>
          </li>


          <li
            className={`
            navigation__list-item
            --animation
            `}
          >
            <Link
              href="/"
            >
              Ropero
            </Link>
          </li>

          <li
            className={`
            navigation__list-item
            --donate
            `}
          >
            <Link
              href="/"
            >
              Donar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
