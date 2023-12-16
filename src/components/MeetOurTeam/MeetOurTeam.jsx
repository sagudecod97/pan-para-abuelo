import React from 'react';
import './MeetOurTeam.scss';

import PersonDescription from '../PersonDescription/PersonDescription';

const MeetOurTeam = (props) => {
  const {
    title,
    teamCards,
  } = props;

  return (
    <section
      className='team'
    >
      <h2
        className='team__title'
      >
        {
          title
        }
      </h2>

      <div
       className='team__container'
      >
        {
          teamCards.map(teammate => {
            return (
              <PersonDescription
                title={teammate.title}
                position={teammate.position}
                description={teammate.description}
                imageSrc={teammate.imageSrc}
                id={teammate.id}
              />
            );
          })
        }
      </div>
    </section>
  );
};

export default MeetOurTeam;
