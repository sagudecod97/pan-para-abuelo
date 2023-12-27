import React, { useState, useEffect } from 'react';
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
        !mainTitle ? (
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

const ImageSectionTemplate = (props) => {
  const {
    imagesArray,
    sections,
  } = props;

  const [joinedComponents, setJoinedComponents] = useState([]);

  useEffect(() => {
    const joinedComponentsArr = [];

    for (let index = 0; index < imagesArray.length; index++) {
      if (sections[index]) {
        joinedComponentsArr.push(
        <ImageSection
          {
            ...imagesArray[index]
          }
        />
        );
        joinedComponentsArr.push(<>{sections[index]}</>);
      } else {
        joinedComponentsArr.push(
          <ImageSection
            {
              ...imagesArray[index]
            }
          />
          );
      }
    }

    setJoinedComponents(joinedComponentsArr);
  }, [imagesArray, sections])

  return (
    <>
    {
      joinedComponents.map(component => {
        return(component);
      })
    }
    </>
  );
};

export default ImageSectionTemplate;
