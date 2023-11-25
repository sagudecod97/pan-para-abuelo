import React, { useState, useEffect } from 'react';
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
      className={`
      carousel-item
      ${isItemActive ? '' : '--hidden'}
      `}
      role='group'
      aria-roledescription='slide'
      aria-label={`${itemIndex} de ${itemsLength}`}
      aria-hidden={isItemActive}
      id={id}
    >
      <div className='carousel-item__image-container'>
        <img
          className='carousel-item__image-tag'
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [multipleSlides, setMultipleSlides] = useState(false);
  const [activeSlides, setActiveSlides] = useState([]);

  const nextSlideHandler = () => {
    if (currentIndex === imagesArray.length - 1) {
      return setCurrentIndex(0);
    }

    setCurrentIndex(currentIndex + 1);
  }

  const previousSlideHandler = () => {
    if (currentIndex === 0) {
      return setCurrentIndex(imagesArray.length - 1);
    }

    setCurrentIndex(currentIndex - 1);
  }

  useEffect(() => {
    if (windowWidth >= 991) {
      setMultipleSlides(true)
    } else {
      setMultipleSlides(false);
    }

    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, [windowWidth, multipleSlides]);

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
          className='images-carousel__controls-control --prev'
          aria-controls='carousel-images-items'
          aria-label='Imagen Anterior'
          onClick={previousSlideHandler}
        >
          <span>❮</span>
        </button>

        <button
          className='images-carousel__controls-control --next'
          aria-controls='carousel-images-items'
          aria-label='Imagen Siguiente'
          onClick={nextSlideHandler}
        >
          <span>❯</span>
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