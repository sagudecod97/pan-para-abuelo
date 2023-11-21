import React from 'react';
import './ImageSectionTemplate.scss';

const ImageSection = (props) => {
  const {
    image,
    phrase,
    center,
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

      <p
       className={`
       section-img__phrase
       ${center.right ? '--right' : ''}
       ${center.left ? '--left' : ''}
       ${center.center ? '--center' : ''}
       `}
      >
        {
          phrase
        }
      </p>
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
              image={arrayElem.image}
              phrase={arrayElem.phrase}
              center={arrayElem.center}
              id={arrayElem.id}
            />
          );
        } else {
          return (
            <DescriptionSection
              title={arrayElem.title}
              id={arrayElem.id}
            />
          );
        }
      })
    }
    </>
  );
};

export default ImageSectionTemplate;
