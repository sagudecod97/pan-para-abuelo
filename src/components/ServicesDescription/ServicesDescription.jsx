import React from "react";
import './ServicesDescription.scss';

import formatDescription from '../../utils/formatDescription';

const ServiceCard = (props) => {
  const {
    title,
    description,
    imageSrc,
    id,
  } = props;

  return (
    <div
      className='service-card'
      id={id}
    >
      <div
        className='service-card__container'
      >
        <img
          className='service-card__img'
          src={imageSrc}
          alt=''
          aria-hidden='true'
        />

        <h3
          className='service-card__title'
        >
          {
            title
          }
        </h3>
      </div>

      <p
        className='service-card__description'
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
    </div>
  );
}

const ServicesDescription = (props) => {
  const {
    title,
    description,
    servicesCards,
  } = props;

  return (
    <section
      className='services-description'
    >
      <h2
        className='services-description__title'
      >
        {
          title
        }
      </h2>

      <p
        className='services-description__description'
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

      <div
        className='services-description__container'
      >
        {
          servicesCards.map(service => {
            return (
              <ServiceCard
                {
                  ...service
                }
              />
            );
          })
        }
      </div>
    </section>
  );
}

export default ServicesDescription;
