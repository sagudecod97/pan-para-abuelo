import React from 'react';
import './ServicesPage.scss';

import PageIntroduction from '../../components/PageIntroduction/PageIntroduction';
import ServicesDescription from '../../components/ServicesDescription/ServicesDescription';
import ServiceCarousel from '../../components/ServiceCarousel/ServiceCarousel';
import ImageSectionTemplate from '../../templates/ImageSectionTemplate/ImageSectionTemplate';

import servicesPageData from '../../data/servicesPageData';

const ServicesPage = () => {
  const sectionsArray = [
    <PageIntroduction
      pageIntroductionData={servicesPageData.servicesIntroduction}
    />,
    <ServicesDescription
      title={servicesPageData.servicesServiceDescriptions.title}
      description={servicesPageData.servicesServiceDescriptions.description}
      servicesCards={servicesPageData.servicesServiceDescriptions.servicesCards}
    />,
    <ServiceCarousel
      title={servicesPageData.servicesFeeding.title}
      description={servicesPageData.servicesFeeding.description}
      carouselLabel={servicesPageData.servicesFeeding.label}
      imagesArray={servicesPageData.servicesFeeding.imagesArray}
    />
  ];
  

  return (
    <ImageSectionTemplate
      imagesArray={servicesPageData.servicesImagesComponents}
      sections={sectionsArray}
    />
  );
};

export default ServicesPage;
