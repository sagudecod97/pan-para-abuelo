import OldBlackMan from '../assets/images/smiling-old-person.jpg';
import OldWhiteMan from '../assets/images/oldman-looking-right.jpg';

const contactUsPageData = {
  contactUsImagesComponents: [
    {
      image: OldWhiteMan,
      phrase: '¡Estemos en contacto!',
      center: {
        right: false,
        center: false,
        left: true,
      },
      mainTitle: true,
      id: ((Math.random() * 10) * Math.random()),
    },
    {
      image: OldBlackMan,
      phrase: 'Sabiduría que ilumina caminos',
      center: {
        right: false,
        center: true,
        left: false,
      },
      id: ((Math.random() * 10) * Math.random()),
    },
  ],
  contactUsContactDescription: {
    imageSrc: OldBlackMan,
    description: [`Estamos aquí para responder a tus preguntas y recibir tus mensajes. Conéctate con la Fundación Pan Para un Abuelo y
     únete a nuestra comunidad dedicada al cuidado de quienes más queremos.`, `¡Esperamos tu contacto!`
    ],
  },
};

export default contactUsPageData;