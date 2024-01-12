import React from 'react';
import './ContactUsPage.scss';

import ImageSectionTemplate from '../../templates/ImageSectionTemplate/ImageSectionTemplate';

import contactUsPageData from '../../data/contactUsPageData';

import formatDescription from '../../utils/formatDescription';

const ContactUsDescription = ({ contactUsInfo }) => {
  const {
    description,
  } = contactUsInfo;

  return (
    <section
      className='contact'
    >
      <p
        className='contact_description'
      >
      {
        formatDescription(description).map((descriptionElem) => {
          if (descriptionElem === "") {
            return (
              <>
                <br/>
              </>
            )
          } else {
            return descriptionElem; 
          }
        })
      }
      </p>
    </section>
  );
}

const ContactUsPage = () => {
  const sectionsArray = [
    <ContactUsDescription
      contactUsInfo={contactUsPageData.contactUsContactDescription}
    />,
  ];

  return (
    <ImageSectionTemplate
      imagesArray={contactUsPageData.contactUsImagesComponents}
      sections={sectionsArray}
    />
  );
};

export default ContactUsPage;
