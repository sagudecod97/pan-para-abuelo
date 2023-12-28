import OldWhiteMan from '../assets/images/oldman-looking-right.jpg';
import OldBlackMan from '../assets/images/smiling-old-person.jpg';
import Feeding from '../assets/images/Alimentación-300x300.png';
import LegalAdice from '../assets/images/Asesoria-Juridica-300x300.png';
import Training from '../assets/images/Capacitación-300x300.png';
import Recreation from '../assets/images/Recreación-300x300.png';
import HealthDays from '../assets/images/Jornadas-de-salud--300x300.png';
import Workshops from '../assets/images/Capacitación-300x300.png';
import SeniorWoman from '../assets/images/senior-woman.jpg';
import Grandma from '../assets/images/grandma.jpg';
import OldBlackMand from '../assets/images/smiling-old-person.jpg';

const servicesPageData = {
  servicesImagesComponents: [
    {
      image: OldWhiteMan,
      phrase: 'Brindamos Servicio con Amor',
      center: {
        right: true,
        center: false,
        left: false,
      },
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
      cta: {
        text: 'Donar',
        url: '/',
      },
      id: ((Math.random() * 10) * Math.random()),
    },
  ],
  servicesIntroduction: {
    title: 'Conoce más sobre nuestros Servicios',
    description: [
      `En la Fundación Pan Para un Abuelo, nos dedicamos a brindar un cuidado integral a nuestros abuelos, enfocándonos en su bienestar físico, emocional y social. 
      Cada día, ofrecemos desayunos nutritivos y almuerzos balanceados, asegurándonos de cubrir sus necesidades alimenticias.`, `Además, organizamos talleres 
      educativos y recreativos, promoviendo tanto el aprendizaje práctico como la creatividad. Nuestra preocupación por la higiene personal 
      se refleja en jornadas dedicadas, donde proporcionamos kits completos y servicios de peluquería. Reconociendo la importancia de sus derechos, 
      establecemos vínculos con instituciones amigas que pueden actuar como defensores.`, `Y para añadir momentos de alegría, organizamos salidas periódicas 
      y celebraciones de fechas especiales. En la Fundación Pan Para un Abuelo, elegirnos significa optar por un enfoque holístico que 
      busca mejorar la calidad de vida de nuestros abuelos, brindándoles no solo cuidado físico, sino también apoyo emocional y oportunidades 
      significativas para su desarrollo personal.`
    ],
    imageSrc: OldBlackMan,
    alt: 'Abuelo sonriendo',
  },
  servicesServiceDescriptions: {
    title: 'Qué servicios ofrecemos',
    description: [`En la Fundación Pan Para Un Abuelo, ofrecemos servicios integrales para asegurar el bienestar de nuestros adultos mayores. 
    Desde una alimentación equilibrada de lunes a sábado hasta recreación activa y acompañamiento en citas médicas y trámites, nos aseguramos 
    de cubrir sus necesidades esenciales.`],
    servicesCards: [
      {
        imageSrc: Feeding,
        title: 'Alimentación',
        description: [`Diariamente, de 8:00 a.m. a 9:30 a.m., servimos un nutritivo desayuno, seguido por un almuerzo 
        de 12:00 p.m. a 1:00 p.m. Muchos de nuestros beneficiarios optan por llevarse un contenedor de comida para la cena.`],
        id: ((Math.random() * 10) * Math.random()),
      },
      {
        imageSrc: LegalAdice,
        title: 'Asesoría Jurídica',
        description: [`Dada la necesidad de apoyo en la defensa de sus derechos, colaboramos con instituciones aliadas que actuan como 
        representantes para los abuelos que requieren asistencia.`, `Este compromiso refuerza 
        nuestra misión de garantizar el respeto y la protección de los derechos de quienes confían en nosotros.`],
        id: ((Math.random() * 10) * Math.random()),
      },
      {
        imageSrc: Training,
        title: 'Capacitación',
        description: [`De manera ocasional, ofrecemos talleres tanto de manualidades como de buen manejo de la salud. 
        Estos eventos proporcionan oportunidades valiosas para la creatividad y el aprendizaje práctico, enriqueciendo 
        la experiencia de nuestros abuelos.`],
        id: ((Math.random() * 10) * Math.random()),
      },
      {
        imageSrc: Recreation,
        title: 'Recreación',
        description: [`Regularmente, planificamos salidas especiales que brindan momentos de esparcimiento y celebración a nuestros abuelos. 
        Estas actividades incluyen eventos festivos como Navidad, el Día del Padre y el Día de la Madre.`, `Nos esforzamos por crear 
        experiencias significativas y alegres.`],
        id: ((Math.random() * 10) * Math.random()),
      },
      {
        imageSrc: HealthDays,
        title: 'Jornadas de Salud',
        description: [`Durante nuestras jornadas dedicadas al fomento del aseo personal, proporcionamos a nuestros abuelos 
        kits completos que incluyen artículos de aseo e incluso servicios de peluquería.`, `Este enfoque integral no solo busca mejorar la 
        higiene personal, sino también elevar la autoestima y el bienestar.`],
        id: ((Math.random() * 10) * Math.random()),
      },
      {
        imageSrc: Workshops,
        title: 'Talleres',
        description: [`A través de talleres especializados, nos esforzamos por proporcionar a nuestros abuelos habilidades prácticas 
        que les faciliten la vida cotidiana.`, `Estos talleres abarcan diversas áreas de preparación, permitiéndoles adquirir conocimientos 
        valiosos y recursos para mejorar su autonomía y calidad de vida.`],
        id: ((Math.random() * 10) * Math.random()),
      },
    ],
  },
  servicesFeeding: {
    title: 'Alimentación',
    description: [`Diariamente, de 8:00 a.m. a 9:30 a.m., servimos un nutritivo desayuno, seguido por un almuerzo 
    de 12:00 p.m. a 1:00 p.m. Muchos de nuestros beneficiarios optan por llevarse un contenedor de comida para la cena.`],
    label: 'Carrusel de imágenes de servicio de alimentación',
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
    ],
  }
};

export default servicesPageData;
