import React from "react";
import './HomeDescription.scss';

import Link from "../Link/Link";

import formatDescription from "../../utils/formatDescription";

const HomeDescription = (props) => {
  const {
    title,
    description,
    imageSrc,
    alt,
    cta,
  } = props;

  return(
    <section
      className='home-description'
    >
      <h2
        className='home-description__title'
      >
        {
          title
        }
      </h2>

      <p
        className='home-description__paragraph'
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
        className='home-description__container'
      >
        <img
          className='home-description__container-img'
          src={imageSrc}
          alt={alt}
        />
      </div>

      <div
        className='home-description__cta'
      >
        <Link
          href={cta}
          className='home-description__cta-link'
        >
          Quienes somos
        </Link>
      </div>
    </section>
  ); 
};

export default HomeDescription;
