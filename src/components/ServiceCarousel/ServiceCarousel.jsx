import React from 'react';
import './ServiceCarousel.scss';

import ImagesCarousel from '../ImagesCarousel/ImagesCarousel';

const ServiceCarousel = (props) => {
  const {
    title,
    description,
    carouselLabel,
    imagesArray,
  } =  props;

  return (
    <section
      className='service-carousel'
    >
      <h2
       className='service-carousel__title'
      >
        {
          title
        }
      </h2>

      <p
        className='service-carousel__description'
      >
        {
          description
        }
      </p>

      <div
       className='service-carousel__images'
      >
        <ImagesCarousel
          label={carouselLabel}
          imagesArray={imagesArray}
        />
      </div>
    </section>
  );
};

export default ServiceCarousel;