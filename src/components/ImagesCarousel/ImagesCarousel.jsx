import React, { useState, useEffect } from 'react';
import './ImagesCarousel.scss';

const CarouselItem = (props) => {
  const {
    imageSrc,
    alt,
    itemIndex,
    itemsLength,
    isItemActive,
    isSideSlide,
    id,
  } = props;

  return (
    <div
      className={`
      carousel-item
      ${isItemActive ? '' : '--hidden'}
      ${isSideSlide.value ? `--slide-item__${isSideSlide.side}` : ''}
      `}
      role='group'
      aria-roledescription='slide'
      aria-label={`${itemIndex + 1} de ${itemsLength}`}
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
      setActiveSlides([imagesArray.length -1, 1]);
      return setCurrentIndex(0);
    }

    if (currentIndex === imagesArray.length - 2) {
      setActiveSlides([currentIndex, 0]);
      return setCurrentIndex(imagesArray.length - 1);
    }

    setActiveSlides([currentIndex, currentIndex + 2]);
    setCurrentIndex(currentIndex + 1);
  }

  const previousSlideHandler = () => {
    if (currentIndex === 0) {
      setActiveSlides([imagesArray.length - 2, 0]);
      return setCurrentIndex(imagesArray.length - 1);
    }

    if (currentIndex === 1) {
      setActiveSlides([imagesArray.length - 1, currentIndex]);
      return setCurrentIndex(currentIndex - 1);
    }

    setActiveSlides([currentIndex - 2, currentIndex]);
    setCurrentIndex(currentIndex - 1);
  }

  useEffect(() => {
    if (windowWidth >= 991) {
      setMultipleSlides(true);
      setActiveSlides([imagesArray.length - 1, 1]);
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
            const sideSlideObject = {
              value: activeSlides.includes(index) && multipleSlides,
              side: activeSlides[0] === index ? 'left' : 'right',
            };

            return (
              <CarouselItem 
                imageSrc={image.imageSrc}
                alt={image.alt}
                itemIndex={index}
                itemsLength={imagesArray.length}
                isItemActive={currentIndex === index}
                isSideSlide={sideSlideObject}
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