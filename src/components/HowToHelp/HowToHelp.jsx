import React from 'react';
import './HowToHelp.scss';

import Link from '../Link/Link';

import formatDescription from '../../utils/formatDescription';

const HelpCard = (props) => {
  const {
    title,
    description,
    imageSrc,
    ctaHref,
    id,
  } = props;
  return (
    <li
      className='help-card'
      id={id}
    >
      <div className='help-card__container'>
        <img
          className='help-card__container-img'
          src={imageSrc}
          alt=''
          aria-hidden='true'
        />
      </div>

      <div
        className='help-card__info'
      >
        <h3
          className='help-card__info-title'
        >
          {
            title
          }
        </h3>

        <p
          className='help-card__info-description'
        >
          {
            formatDescription(description).map(descriptionElem => {
              if (descriptionElem === "") {
                return (
                  <>
                    <br/>
                  </>
                )
              } else {
                return descriptionElem; 
              }
            }) 
          }
        </p>

        <p
          className='help-card__info-cta'  
        >
          Conoce más sobre
          <Link
            className='help-card__info-link'
            href={ctaHref}
          >
          {" "}{ title }
          </Link>
        </p>
      </div>
    </li>
  )
}

const HowToHelp = (props) => {
  const { cardsData } = props;
  return (
    <section
      className='how-help'
    >
      <h2
        className='how-help__title'
      >
        Cómo puedes ayudarnos
      </h2>

      <p
       className='how-help__description'
      >
        Descubre cómo puedes marcar la diferencia. Desde apoyar a nuestros abuelos con compras en nuestro Ropero hasta donar para honrar 
        a tus seres queridos, y ofrecer tu tiempo y habilidades, ¡Acompáñanos y encuentra la forma perfecta de ayudarnos!
      </p>
  
      <ul
        className='how-help__container'
      >
        {
          cardsData.map(helpCardData => {
            return (
              <HelpCard
              {
                ...helpCardData
              }
              />
            );
          })
        }
      </ul>
    </section>
  );
};

export default HowToHelp;
