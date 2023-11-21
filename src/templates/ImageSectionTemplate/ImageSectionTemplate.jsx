import React from 'react';
import './ImageSectionTemplate.scss';

const ImageSection = (props) => {
  const {
    image,
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
