import OldWhiteMan from '../assets/images/oldman-looking-right.jpg';
import OldBlackMan from '../assets/images/smiling-old-person.jpg';
import SeniorWoman from '../assets/images/senior-woman.jpg';
import Mission from '../assets/images/mission.png';
import Vision from '../assets/images/darkeye.png';

const aboutUsPageData = {
  aboutUsImagesComponents: [
    {
      image: OldWhiteMan,
      phrase: 'Conece más sobre nuestra fundación',
      center: {
        right: true,
        center: false,
        left: false,
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
    {
      image: OldWhiteMan,
      phrase: 'Historias que inspiran respeto',
      center: {
        right: false,
        center: false,
        left: true,
      },
      id: ((Math.random() * 10) * Math.random()),
    },
    {
      type: 'img',
      image: OldBlackMan,
      phrase: 'Apoya a nuestro abuelos',
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
  aboutUsHowWeStart: {
    title: 'Cómo iniciamos',
    description: [`¡Imagina un grupo de amigos decididos a hacer la diferencia en la vida de adultos mayores desprotegidos! 
    Así nació la increíble FUNDACIÓN PAN PARA UN ABUELO en el 2006. Impulsados por el amor al servicio, nos unimos con pocos 
    recursos pero grandes sueños de proporcionar una vida digna a quienes más lo necesitan.`, `Lo que comenzó como una idea aparentemente loca 
    se convirtió en una realidad el 27 de noviembre de 2007, cuando nos convertimos en una Fundación legalmente constituida. Empezamos con 20 usuarios, 
    ofreciéndoles un modesto almuerzo, y hoy, somos una familia de 100 adultos mayores fuertes y vibrantes. Con un dedicado equipo de trabajo, una 
    junta directiva y el apoyo de generosos benefactores, estamos comprometidos en brindarles a nuestros abuelos una vida más digna. ¡Únete a nuestra 
    historia de amor y servicio para hacer un impacto significativo juntos!`],
    mainImageSrc: OldBlackMan,
    imagesSrcArray: [
      OldBlackMan,
      OldWhiteMan,
      OldWhiteMan,
    ]
  },
  aboutUsInstitutionalMessage: {
    title: 'Valores Corporativos',
    mision: {
      title: 'Misión',
      description: [`En la Fundación Pan Para Un Abuelo, nos dedicamos apasionadamente a mejorar la calidad de vida de los adultos mayores en 
      situación de vulnerabilidad. Nuestra misión es proporcionar alimentos nutritivos, espacios recreativos y un apoyo integral que abarque 
      desde la asistencia médica hasta el acompañamiento emocional.`, `Guiados por el compromiso y el amor al servicio, trabajamos incansablemente 
      para crear un entorno cálido y solidario que no solo satisfaga las necesidades básicas, sino que también fomente la dignidad, 
      la felicidad y la conexión en cada rincón de la vida de nuestros abuelos. `],
      imageSrc: Mission,
    },
    vision: {
      title: 'Visión',
      description: [`En la Fundación Pan Para Un Abuelo, visualizamos un futuro donde cada adulto mayor desfavorecido experimente una vida plena 
      y digna. Nos esforzamos por ser la luz que ilumina sus días, brindándoles no solo alimentos y refugio, sino también un cálido abrazo de comunidad y compasión.`,
      `Nuestra visión es ser el faro de esperanza que guía a nuestros abuelos hacia un mañana más brillante, lleno de amor, apoyo y alegría compartida. os esforzamos 
      por ser un faro de esperanza y un testimonio viviente de que cada persona merece envejecer con respeto, cariño y significado.`,
    ],
      imageSrc: Vision,
    },
  },
  aboutUsMeetOurTeam: {
    title: 'Conoce a nuestro equipo',
    teamCards: [
      {
        title: "Vilma Betancur",
        position: "Fundadora",
        imageSrc: SeniorWoman,
        description: [
          `Con una rica trayectoria en el mundo comercial, un día decidió aventurarse en el fascinante campo del trabajo social.
          Jamás imaginó que un giro del destino la llevaría al apasionante mundo de cuidar a los abuelos. Su anhelo es no solo brindar ayuda, 
          sino también reivindicar la imagen de los adultos mayores en nuestra sociedad, con amor y dedicación.`,
          `Después de una basta experiencia en el sector comercial, decidió un día darse la oportunidad de conocer el trabajo social.
          Nunca pensó una casualidad la llevara al verdadero amor a través de cuidar a los abuelos.`
        ],
        id: ((Math.random() * 10) * Math.random()),
      },
      {
        title: "Vilma Betancur",
        position: "Fundadora",
        imageSrc: SeniorWoman,
        description: [
          `Con una rica trayectoria en el mundo comercial, un día decidió aventurarse en el fascinante campo del trabajo social.
          Jamás imaginó que un giro del destino la llevaría al apasionante mundo de cuidar a los abuelos. Su anhelo es no solo brindar ayuda, 
          sino también reivindicar la imagen de los adultos mayores en nuestra sociedad, con amor y dedicación.`,
          `Después de una basta experiencia en el sector comercial, decidió un día darse la oportunidad de conocer el trabajo social.
          Nunca pensó una casualidad la llevara al verdadero amor a través de cuidar a los abuelos.`
        ],
        id: ((Math.random() * 10) * Math.random()),
      },
      {
        title: "Vilma Betancur",
        position: "Fundadora",
        imageSrc: SeniorWoman,
        description: [
          `Con una rica trayectoria en el mundo comercial, un día decidió aventurarse en el fascinante campo del trabajo social.
          Jamás imaginó que un giro del destino la llevaría al apasionante mundo de cuidar a los abuelos. Su anhelo es no solo brindar ayuda, 
          sino también reivindicar la imagen de los adultos mayores en nuestra sociedad, con amor y dedicación.`,
          `Después de una basta experiencia en el sector comercial, decidió un día darse la oportunidad de conocer el trabajo social.
          Nunca pensó una casualidad la llevara al verdadero amor a través de cuidar a los abuelos.`
        ],
        id: ((Math.random() * 10) * Math.random()),
      },
      {
        title: "Vilma Betancur",
        position: "Fundadora",
        imageSrc: SeniorWoman,
        description: [
          `Con una rica trayectoria en el mundo comercial, un día decidió aventurarse en el fascinante campo del trabajo social.
          Jamás imaginó que un giro del destino la llevaría al apasionante mundo de cuidar a los abuelos. Su anhelo es no solo brindar ayuda, 
          sino también reivindicar la imagen de los adultos mayores en nuestra sociedad, con amor y dedicación.`,
          `Después de una basta experiencia en el sector comercial, decidió un día darse la oportunidad de conocer el trabajo social.
          Nunca pensó una casualidad la llevara al verdadero amor a través de cuidar a los abuelos.`
        ],
        id: ((Math.random() * 10) * Math.random()),
      },
    ],
  }
};

export default aboutUsPageData;
