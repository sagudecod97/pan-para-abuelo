import React from 'react';
import './Footer.scss';

import Link from '../Link/Link';
import IconComponent from '../IconComponent/IconComponent';

const Footer = () => {
  return (
    <footer
      className='footer'
    >
      <h3
        className='footer__title --order-two'
        id='footer-navigation'
      >
        Navegación
      </h3>

      <ul
        aria-describedby="footer-navigation"
        className='footer__list --order-five'
      >
        <li
        className={`
          footer__list-item
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
          footer__list-item
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
          footer__list-item
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
          footer__list-item
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
          footer__list-item
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
          footer__list-item
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

      <h3
        className='footer__title --order-one'
        id='footer-socials'
      >
        Redes Sociales
      </h3>

      <ul
        aria-describedby='footer-socials'
        className='footer__list --order-four'
      >
        <li
          className={`
          footer__list-item
          --animation
          `}
        >
          <Link
            href="/"
          >
            Youtube
            <IconComponent
              className="footer__list-icon"
              icon="youtube"
            />
          </Link>
        </li>

        <li
          className={`
          footer__list-item
          --animation
          `}
        >
          <Link
            href="/"
          >
            Instagram
            <IconComponent
              className="footer__list-icon"
              icon="instagram"
            />
          </Link>
        </li>

        <li
        className={`
          footer__list-item
          --animation
          `}
        >
          <Link
            href="/"
          >
            Facebook {" "}
            <IconComponent
              className="footer__list-icon"
              icon="facebook"
            />
          </Link>
        </li>
      </ul>

      <h3
        className='footer__title --order-three'
        id='footer-contact'
      >
        Contacto
      </h3>

      <ul
        aria-describedby='footer-socials'
        className='footer__list --order-six'
      >
        <li
        className={`
          footer__list-item
          --animation
          `}
        >
          <Link
            href="mailto:info@example.com"
          >
            Correo Electrónico
            <IconComponent
              className="footer__list-icon"
              icon="mail4"
            />
          </Link>
        </li>

        <li
        className={`
          footer__list-item
          --animation
          `}
        >
          <Link
            href="/"
          >
            WhatsApp
            <IconComponent
              className="footer__list-icon"
              icon="whatsapp"
            />
          </Link>
        </li>
      </ul>

      <div
        className='footer__info --order-six'
      >
        <Link
          className="footer__info-link"
          href="https://www.google.com/maps/place/48.858844,2.294351"
          target="_blank"
          ariaLabel="Visitar dirección en Google Maps"
        >
            Medellín, Antioquia <br /> Carrera 35A No. 39A-23
        </Link>

        <p className='footer__info-rights'>
          &copy; 2023 Fundación Pan para un Abuelo. Todos los derechos Reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
