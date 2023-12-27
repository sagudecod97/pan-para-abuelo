import React from "react";
import './OfferedServices.scss';

import Link from '../Link/Link';

const OfferedServiceCard = (props) => {
  const {
    imageSrc,
    title,
    id,
  } = props;

  return (
    <li
      className='services__item'
      id={id}
    >
      <img
        className='services__img'
        src={imageSrc}
        alt=''
        aria-hidden='true'
      />

      <p
        className='services__description'
      >
        {
          title
        }
      </p>
    </li>
  );
}

const OfferedServices = (props) => {
  const { 
    title,
    description,
    servicesCards,
  } = props;

  return (
    <section
    className='offered-services'
    >
      <h2
        className='offered-services__title'
      >
        {
          title
        }
      </h2>

      <p
        className='offered-services__description'
      >
        {
          description
        }
      </p>

      <ul
        className='services'
      >
        {
          servicesCards.map(service => {
            return (
              <OfferedServiceCard
              {
                ...service
              }
              />
            );
          })
        }
      </ul>

      <Link
        className='offered-services__cta'
        href='/'
      >
        Conoce Más Servicios
      </Link>
    </section>
  );
};

export default OfferedServices;
