import SeniorWoman from '../assets/images/senior-woman.jpg';
import Grandma from '../assets/images/grandma.jpg';
import OldWhiteMan from '../assets/images/oldman-looking-right.jpg';
import OldBlackMand from '../assets/images/smiling-old-person.jpg';

const objectCarouselImagesData = {
  label: 'Carrusel de Imágenes ',
  imagesArray: [
    {
      imageSrc: Grandma,
      alt: 'Imagen de abuela observando',
      href:'/',
      caption: 'Conoce a Olga',
      id: ((Math.random() * 10) * Math.random()),
    },
    {
      imageSrc: SeniorWoman,
      alt: 'Imagen de señora sonriendo',
      href:'/',
      caption: 'Conoce a Vilma',
      id: ((Math.random() * 10) * Math.random()),
    },
    {
      imageSrc: OldWhiteMan,
      alt: 'Imagen de señor con cara amable',
      href:'/',
      caption: 'Conoce a Pedro',
      id: ((Math.random() * 10) * Math.random()),
    },
    {
      imageSrc: OldBlackMand,
      alt: 'Imagen de señor de color sonriendo',
      href:'/',
      caption: 'Conoce a José',
      id: ((Math.random() * 10) * Math.random()),
    },
  ]
};

export default objectCarouselImagesData;
