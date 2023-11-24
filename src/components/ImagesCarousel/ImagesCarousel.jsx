import React, { useState } from 'react';
import './ImagesCarousel.scss';

const CarouselItem = (props) => {
  const {
    imageSrc,
    alt,
    itemIndex,
    itemsLength,
    isItemActive,
    id,
  } = props;

  return (
    <div
      className='carousel-item'
      role='group'
      aria-roledescription='slide'
      aria-label={`${itemIndex} de ${itemsLength}`}
      aria-hidden={isItemActive}
      id={id}
    >
      <div className='carousel-item__image'>
        <img
          src={imageSrc}
          alt={alt}
        />
      </div>
    </div>
  );
};

const ImagesCarousel = (props) => {
  const {
    label,
    imagesArray,
  } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div 
      className='images-carousel'
      aria-roledescription='carousel'
      aria-label={label}
    >
      <div
        className='images-carousel__controls'
      >
        <button
          className='images-carousel__controls-prev'
          aria-controls='carousel-images-items'
          aria-label='Imagen Anterior'
          onClick={() => console.log('Prev')}
        >
          ❮
        </button>

        <button
          className='images-carousel__controls-next'
          aria-controls='carousel-images-items'
          aria-label='Imagen Siguiente'
          onClick={() => console.log('Next')}
        >
          ❯
        </button>
      </div>

      <div
        className='images-carousel__items'
        id='carousel-images-items'
        aria-live='polite'
      >
        {
          imagesArray.map((image, index) => {
            return (
              <CarouselItem 
                imageSrc={image.imageSrc}
                alt={image.alt}
                itemIndex={index + 1}
                itemsLength={imagesArray.length}
                isItemActive={currentIndex === index}
                id={image.id}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default ImagesCarousel;