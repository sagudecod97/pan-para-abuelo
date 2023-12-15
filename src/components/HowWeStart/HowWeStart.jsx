import React from 'react';
import './HowWeStart.scss';

import formatDescription from '../../utils/formatDescription';

const HowWeStart = ({ howWeStartData}) => {
  const {
    title,
    description,
    mainImageSrc,
    imagesSrcArray,
  } = howWeStartData;
  return (
    <section
      className='how-start'
    >
      <h2
       className='how-start__title'
      >
        {
          title
        }
      </h2>

      <p
        className='how-start__description'
      >
        {
          formatDescription(description).map((descriptionElem) => {
            if (descriptionElem === "") {
              return (
                <>
                  <br/>
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
        className='images-container'
        aria-hidden='true'
      >
        <div
          className='img-container img-container--main'
        >
          <img
            className='img-container__img'
            src={mainImageSrc}
            alt=''
          />
        </div>

        {
          imagesSrcArray.map((image, index) => {
            const imageSelector = {
              1: 'one',
              2: 'two',
              3: 'three',
            };

            return (
              <div
                className={`img-container img-container--${imageSelector[index + 1]}`}
              >
                <img
                  className='img-container__img'
                  src={image}
                  alt=''
                />
              </div>
            );
          })
        }
      </div>
    </section>
  );
};

export default HowWeStart;
