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

  const buttonMenu = useRef(null);
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
    const { key, code } = event;

    if (key === 'Tab') {
      setOpenNavigation(false);
    } else if (key === 'Enter' || code === 'Space' || key === 'ArrowDown') {
      firstLinkNode.focus();
      setCurrentNavFocus(0);
    } else if (key === 'ArrowUp') {
      lastLinkNode.focus();
      setCurrentNavFocus(navigationLinks.length - 1);
    }
  }

  const handleKeyDownNav = (event) => {
    const { key, shiftKey, code } = event;
    const navigationLinks = [...navigationContainer.current.querySelectorAll('a')];

    if (code === 'Space') {
      return navigationLinks[currentNavFocus].click();
    }

    if (key === 'Tab' && shiftKey) {
      setOpenNavigation(false);
      return buttonMenu.current.click();
    }

    if (key === 'Tab') {
      setOpenNavigation(false);
    }

    if (key === 'ArrowDown' && currentNavFocus === navigationLinks.length - 1) {
      firstLinkNode.focus()
      setCurrentNavFocus(0);
    } else if (key === 'ArrowDown') {
      navigationLinks[currentNavFocus + 1].focus();
      setCurrentNavFocus(currentNavFocus + 1)
    } else if (key === 'ArrowUp' && currentNavFocus === 0) {
      lastLinkNode.focus()
      setCurrentNavFocus(navigationLinks.length - 1);
    } else if (key === 'ArrowUp') {
      navigationLinks[currentNavFocus - 1].focus();
      setCurrentNavFocus(currentNavFocus - 1)
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
        ref={buttonMenu}
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
