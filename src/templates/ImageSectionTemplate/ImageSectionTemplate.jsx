import React from 'react';
import './ImageSectionTemplate.scss';

const ImageSection = (props) => {
  const {
    image,
    phrase,
    center,
    cta,
    mainTitle,
    id,
  } = props;

  return (
    <section
      className='section-img'
      id={id}
    >
      <img
        className='section-img__image'
        src={image}
        alt="Images' section"
      />

      {
        mainTitle ? (
          <p
            className={`
            section-img__phrase
            ${center.right ? '--right' : ''}
            ${center.left ? '--left' : ''}
            ${center.center ? '--center' : ''}
            `}
            id={cta ? 'img-phrase' : ''}
          >
            {
              phrase
            }
            {
              cta && (
                <a
                  aria-labelledby='img-phrase'
                  className='section-img__link'
                  href={cta.url}
                >
                  {
                  cta.text
                  }
                </a>
              )
            }
          </p>
        ) : (
          <h1
            className={`
            section-img__phrase
            ${center.right ? '--right' : ''}
            ${center.left ? '--left' : ''}
            ${center.center ? '--center' : ''}
            `}
            id={cta ? 'img-phrase' : ''}
          >
            {
              phrase
            }
            {
              cta && (
                <a
                  aria-labelledby='img-phrase'
                  className='section-img__link'
                  href={cta.url}
                >
                  {
                  cta.text
                  }
                </a>
              )
            }
          </h1>
        )
      }
    </section>
  );
};

const DescriptionSection = (props) => {
  const {
    title,
    id,
  } = props;
  return (
    <section
      className='section-description'
      id={id}
    >
      <h2
        className='section-description__title'
      >
        {
          title
        }
      </h2>
    </section>
  )
}

const ImageSectionTemplate = (props) => {
  const {
    imagesArray,
  } = props;

  return (
    <>
    {
      imagesArray.map((arrayElem) =>{
        if (arrayElem.type === 'img') {
          return (
            <ImageSection
              {
                ...arrayElem
              }
            />
          );
        } else {
          return (
            <DescriptionSection
              {
                ...arrayElem
              }
            />
          );
        }
      })
    }
    </>
  );
};

export default ImageSectionTemplate;
