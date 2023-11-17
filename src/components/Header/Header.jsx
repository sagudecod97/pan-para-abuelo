import React, { useState, useRef, useEffect } from 'react';
import './Header.scss';

import IconComponent from '../IconComponent/IconComponent';
import Link from '../Link/Link';

import PanParaAbueloLogo from '../../assets/images/pan-para-abuelo-logo.png';

const Header = () => {
  const [openNavitation, setOpenNavigation] = useState(false);
  const [currentNavFocus, setCurrentNavFocus] = useState(0);
  const [firstLinkNode, setFirstLinkNode] = useState(null);
  const [lastLinkNode, setLastLinkNode] = useState(null);
  const [navigationLinks, setNavigationLinks] = useState(null);

  const firstNavItem = useRef(null);
  const lastNavItem = useRef(null);
  const navigationContainer = useRef(null);

  const openNavigationHandler = () => {
    setOpenNavigation(!openNavitation)
  };

  const handlerButtonNavFocus = () => {
    setOpenNavigation(true);
  }

  const handleKeyDownButtonNav = (event) => {
    const { key } = event;

    if (key === 'Enter' || key === 'ArrowDown') {
      firstLinkNode.focus();
      setCurrentNavFocus(0);
    } else if (key === 'ArrowUp') {
      lastLinkNode.focus();
      setCurrentNavFocus(navigationLinks.length - 1);
    }
  }

  const handleKeyDownNav = (event) => {
    const { key } = event;
    const navigationLinks = [...navigationContainer.current.querySelectorAll('a')];

    if (key === 'ArrowDown' && currentNavFocus === navigationLinks.length - 1) {
      firstLinkNode.focus()
      setCurrentNavFocus(0);
    } else if (key === 'ArrowDown') {
      navigationLinks[currentNavFocus + 1].focus();
      setCurrentNavFocus(currentNavFocus + 1)
    }
  }

  useEffect(() => {
    setFirstLinkNode(firstNavItem.current.children[0]);
    setLastLinkNode(lastNavItem.current.children[0]);
    setNavigationLinks([...navigationContainer.current.querySelectorAll('a')]);
  }, [])

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
        onFocus={handlerButtonNavFocus}
        className='header__menu'
        aria-label='Menú de navegación'
        aria-haspopup='menu'
        aria-expanded={openNavitation}
        aria-controls='navigation-list'
        onKeyDown={handleKeyDownButtonNav}
        type='button'
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
        aria-hidden={!openNavitation}
        onKeyDown={handleKeyDownNav}
      >
        <ul
          className='navigation__list'
          role='menu'
          id='navigation-list'
          ref={navigationContainer}
        >
          <li
            className={`
            navigation__list-item
            --animation
            `}
            role='menuitem'
            ref={firstNavItem}
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
            role='menuitem'
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
            role='menuitem'
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
            role='menuitem'
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
            role='menuitem'
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
            role='menuitem'
            ref={lastNavItem}
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
