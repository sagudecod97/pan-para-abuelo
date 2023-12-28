import React from "react";
import './AboutUsPage.scss';

import ImageSectionTemplate from '../../templates/ImageSectionTemplate/ImageSectionTemplate';
import HowWeStart from "../../components/HowWeStart/HowWeStart";
import InstitutionalMessage from "../../components/InstitutionalMessage/InstitutionalMessage";
import MeetOurTeam from "../../components/MeetOurTeam/MeetOurTeam";

import aboutUsPageData from "../../data/aboutUsPageData";

const AboutUsPage = () => {
  const sectionsArray = [
    <HowWeStart
      howWeStartData={aboutUsPageData.aboutUsHowWeStart}
    />,
    <InstitutionalMessage
      title={aboutUsPageData.aboutUsInstitutionalMessage.title}
      mision={aboutUsPageData.aboutUsInstitutionalMessage.mision}
      vision={aboutUsPageData.aboutUsInstitutionalMessage.vision}
    />,
    <MeetOurTeam
      title={aboutUsPageData.aboutUsMeetOurTeam.title}
      teamCards={aboutUsPageData.aboutUsMeetOurTeam.teamCards}
    />
  ];

  return (
    <ImageSectionTemplate
      imagesArray={aboutUsPageData.aboutUsImagesComponents}
      sections={sectionsArray}
    />
  );
};

export default AboutUsPage;
