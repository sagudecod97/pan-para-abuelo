import React from 'react';
import './HomePage.scss';

import ImageSectionTemplate from '../../templates/ImageSectionTemplate/ImageSectionTemplate';
import HomeDescription from '../../components/HomeDescription/HomeDescription';
import OfferedServices from '../../components/OfferedServices/OfferedServices';
import HowToHelp from '../../components/HowToHelp/HowToHelp';

import homePageData from '../../data/homePageData';

const HomePage = () => {
  const sectionsArray = [
    <HomeDescription
      homeDescriptionData={homePageData.homeDescription}
      />,
    <OfferedServices
      title={homePageData.homeOfferedServices.title}
      description={homePageData.homeOfferedServices.description}
      servicesCards={homePageData.homeOfferedServices.servicesCards}
    />,
    <HowToHelp
      title={homePageData.homeHowToHelp.title}
      description={homePageData.homeHowToHelp.description}
      cardsData={homePageData.homeHowToHelp.cardsData}
    />
  ];

  return (
    <ImageSectionTemplate
      imagesArray={homePageData.homeImagesComponents}
      sections={sectionsArray}
    /> 
  );
};

export default HomePage;
