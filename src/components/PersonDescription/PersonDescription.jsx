import React from "react";
import './PersonDescription.scss';

import formatDescription from "../../utils/formatDescription";

const PersonDescription = (props) => {
  const {
    title,
    position,
    description,
    imageSrc,
    id,
  } = props;

  const descriptionTemplate = <p
    className='person__about-description'
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
  </p>;

  return (
    <article
      className='person'
      id={id}
    >
      <div
        className='person__info'
      >
        <div
          className='picture'
        >
          <img
            className='picture__img'
            alt={`Foto de ${title}`}
            src={imageSrc}
          />
        </div>


        <div
          className='info'
        >
          <p
            className='info__title'
          >
            {
              title
            }
          </p>

          <p
            className='info__position'
          >
            {
              position
            }
          </p>
        </div>
      </div>

      <div
        className='person__about'
      >
        <h3
        className='person__about-title'
        >
          Acerca de { title }
        </h3>

        {
          descriptionTemplate
        }
      </div>

      <hr
        className='person__separator'
      />
    </article>
  );
};

export default PersonDescription;
