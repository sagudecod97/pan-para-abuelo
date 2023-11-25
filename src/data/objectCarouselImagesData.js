import SeniorWoman from '../assets/images/senior-woman.jpg';
import Grandma from '../assets/images/grandma.jpg';

const objectCarouselImagesData = {
  label: 'Carrusel de Imágenes ',
  imagesArray: [
    {
      imageSrc: Grandma,
      alt: 'Imagen de señora sonriendo',
      id: ((Math.random() * 10) * Math.random()),
    },
    {
      imageSrc: SeniorWoman,
      alt: 'Imagen de señora sonriendo',
      id: ((Math.random() * 10) * Math.random()),
    },
    {
      imageSrc: Grandma,
      alt: 'Imagen de señora sonriendo',
      id: ((Math.random() * 10) * Math.random()),
    },
    {
      imageSrc: SeniorWoman,
      alt: 'Imagen de señora sonriendo',
      id: ((Math.random() * 10) * Math.random()),
    },
  ]
};

export default objectCarouselImagesData;
