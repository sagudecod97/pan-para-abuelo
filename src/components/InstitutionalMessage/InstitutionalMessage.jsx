import React from 'react';
import './InstitutionalMessage.scss';

import formatDescription from '../../utils/formatDescription';

const InstitutionalMessage = (props) => {
  const {
    title,
    mision,
    vision,
  } = props;
  return (
    <section
      className='institutional'
    >
      <h2
        className='institutional__title'
      >
        {
          title
        }
      </h2>

      <div
        className='message'
      >
        <div
          className='message__container'
        >
          <img
            className='message__container-img'
            src={vision.imageSrc}
            alt=''
          />
        </div>

        <h3
          className='message__title'
        >
        {
          vision.title
        }
        </h3>

        <p
          className='message__description'
        >
        {
          formatDescription(vision.description).map((descriptionElem) => {
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
      </div>

      <div
        className='message'
      >
        <div
          className='message__container'
        >
          <img
            className='message__container-img message__container-img--smaller'
            src={mision.imageSrc}
            alt=''
          />
        </div>

        <h3
          className='message__title'
        >
        {
          mision.title
        }
        </h3>

        <p
          className='message__description'
        >
        {
          formatDescription(mision.description).map((descriptionElem) => {
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
      </div>
    </section>
  );
};

export default InstitutionalMessage;
