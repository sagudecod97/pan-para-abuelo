import React from "react";
import './OfferedServices.scss';

import Feeding from '../../assets/images/Alimentación-300x300.png';
import LegalAdice from '../../assets/images/Asesoria-Juridica-300x300.png';
import Training from '../../assets/images/Capacitación-300x300.png';
import Recreation from '../../assets/images/Recreación-300x300.png';
import HealthDays from '../../assets/images/Jornadas-de-salud--300x300.png';
import Workshops from '../../assets/images/Capacitación-300x300.png';

const OfferedServices = () => {
  return (
    <section
    className='offered-services'
    >
      <h2
        className='offered-services__title'
      >
        Qué servicios ofrecemos
      </h2>

      <p
        className='offered-services__description'
      >
        Alimentación de lunes a sábado, recreación y acompañamiento en citas médicas, de registro y demás.
      </p>

      <ul
        className='services'
      >
        <li
          className='services__item'
        >
          <img
            className='services__img'
            src={Feeding}
            alt=''
            aria-hidden='true'
          />

          <p
            className='services__description'
          >
            Alimentación
          </p>
        </li>

        <li
          className='services__item'
        >
          <img
            className='services__img'
            src={LegalAdice}
            alt=''
            aria-hidden='true'
          />

          <p
            className='services__description'
          >
            Asesoría Jurídica
          </p>
        </li>

        <li
          className='services__item'
        >
          <img
            className='services__img'
            src={Training}
            alt=''
            aria-hidden='true'
          />

          <p
            className='services__description'
          >
            Capacitación
          </p>
        </li>

        <li
          className='services__item'
        >
          <img
            className='services__img'
            src={Recreation}
            alt=''
            aria-hidden='true'
          />

          <p
            className='services__description'
          >
            Recreación
          </p>
        </li>

        <li
          className='services__item'
        >
          <img
            className='services__img'
            src={HealthDays}
            alt=''
            aria-hidden='true'
          />

          <p
            className='services__description'
          >
            Jornadas de Salud
          </p>
        </li>

        <li
          className='services__item'
        >
          <img
            className='services__img'
            src={Workshops}
            alt=''
            aria-hidden='true'
          />

          <p
            className='services__description'
          >
            Talleres
          </p>
        </li>
      </ul>
    </section>
  );
};

export default OfferedServices;
