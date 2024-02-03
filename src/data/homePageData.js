import OldWhiteMan from "../assets/images/oldman-looking-right.jpg";
import OldBlackMan from "../assets/images/smiling-old-person.jpg";
import Volunteering from "../assets/images/volunteering.png";
import Leaf from "../assets/images/leaf.png";
import Shop from "../assets/images/shop.png";
import Horse from "../assets/images/horse.png";
import Donation from "../assets/images/donation.png";
import Feeding from "../assets/images/Alimentación-300x300.png";
import LegalAdice from "../assets/images/Asesoria-Juridica-300x300.png";
import Training from "../assets/images/Capacitación-300x300.png";
import Recreation from "../assets/images/Recreación-300x300.png";
import HealthDays from "../assets/images/Jornadas-de-salud--300x300.png";
import Workshops from "../assets/images/Capacitación-300x300.png";

const homePageData = {
  homeImagesComponents: [
    {
      image: OldWhiteMan,
      phrase: "Vínculos que construyen legados duraderos",
      center: {
        right: true,
        center: false,
        left: false,
      },
      id: Math.random() * 10 * Math.random(),
    },
    {
      image: OldBlackMan,
      phrase: "Sabiduría que ilumina caminos",
      center: {
        right: false,
        center: true,
        left: false,
      },
      id: Math.random() * 10 * Math.random(),
    },
    {
      image: OldWhiteMan,
      phrase: "Historias que inspiran respeto",
      center: {
        right: false,
        center: false,
        left: true,
      },
      id: Math.random() * 10 * Math.random(),
    },
    {
      type: "img",
      image: OldBlackMan,
      phrase: "Apoya a nuestro abuelos",
      center: {
        right: false,
        center: true,
        left: false,
      },
      cta: {
        text: "Donar",
        url: "/",
      },
      id: Math.random() * 10 * Math.random(),
    },
  ],
  homeIntroduction: {
    title: "Bienvenidos a Nuestra fundación",
    description: [
      `¡Descubre la magia de la Fundación Pan Para Un Abuelo! Somos mucho más que una organización sin ánimo de lucro en Medellín. 
      Somos un hogar vibrante y amoroso para adultos mayores de escasos recursos. En nuestro acogedor Centro Día, ofrecemos no solo 
      alimentación diaria, sino también momentos de recreación, capacitación y, lo más importante, el calor humano que hace de nuestro 
      lugar un verdadero hogar.`,
      `Nos enorgullece nuestra autonomía administrativa y nuestro compromiso con la legalidad. Sometidos 
      al régimen establecido por la ley, trabajamos incansablemente para proporcionar un ambiente cálido y seguro para nuestros más de 100 abuelos. 
      Cada uno de ellos es parte de nuestra familia, y tú también puedes formar parte de esta increíble experiencia.`,
    ],
    imageSrc: OldBlackMan,
    alt: "Abuelo sonriendo",
    cta: "/",
  },
  homeOfferedServices: {
    title: "Qué servicios ofrecemos",
    description: [
      `En la Fundación Pan Para Un Abuelo, ofrecemos servicios integrales para asegurar el bienestar de nuestros adultos mayores. 
    Desde una alimentación equilibrada de lunes a sábado hasta recreación activa y acompañamiento en citas médicas y trámites, nos aseguramos 
    de cubrir sus necesidades esenciales.`,
    ],
    servicesCards: [
      {
        imageSrc: Feeding,
        title: "Alimentación",
        id: Math.random() * 10 * Math.random(),
      },
      {
        imageSrc: LegalAdice,
        title: "Asesoría Jurídica",
        id: Math.random() * 10 * Math.random(),
      },
      {
        imageSrc: Training,
        title: "Capacitación",
        id: Math.random() * 10 * Math.random(),
      },
      {
        imageSrc: Recreation,
        title: "Recreación",
        id: Math.random() * 10 * Math.random(),
      },
      {
        imageSrc: HealthDays,
        title: "Jornadas de Salud",
        id: Math.random() * 10 * Math.random(),
      },
      {
        imageSrc: Workshops,
        title: "Talleres",
        id: Math.random() * 10 * Math.random(),
      },
    ],
  },
  homeHowToHelp: {
    title: "Cómo puedes ayudarnos",
    description: [
      `Descubre cómo puedes marcar la diferencia. Desde apoyar a nuestros abuelos con compras en nuestro Ropero hasta donar para honrar 
    a tus seres queridos, y ofrecer tu tiempo y habilidades, ¡Acompáñanos y encuentra la forma perfecta de ayudarnos!`,
    ],
    cardsData: [
      {
        title: "Voluntariado",
        description: [
          `Únete a nosotros para hacer la diferencia. Si deseas contribuir con tu tiempo o experiencia profesional, 
        estamos emocionados por conocerte. ¡Juntos podemos lograr cosas asombrosas!`,
        ],
        imageSrc: Volunteering,
        ctaHref: "/",
        id: Math.random() * 10 * Math.random(),
      },
      {
        title: "Redenciones",
        description: [
          `Rinde homenaje a tus seres queridos fallecidos haciendo una donación a Pan Para un Abuelo. Como muestra de agradecimiento, recibirás un obsequio conmemorativo.`,
        ],
        imageSrc: Leaf,
        ctaHref: "/",
        id: Math.random() * 10 * Math.random(),
      },
      {
        title: "Comprando en el Ropero",
        description: [
          `¡Descubre moda con propósito en nuestro ropero! Cada compra no solo te brinda estilo, sino que también apoya a nuestros queridos abuelos. 
        ¡Haz de tu elección de moda un gesto significativo!`,
        ],
        imageSrc: Shop,
        ctaHref: "/",
        id: Math.random() * 10 * Math.random(),
      },
      {
        title: "Compra o dona un salto",
        description: [
          `Recibimos generosas donaciones de saltos de parte de propietarios de caballos. Estos se subastan o rifan para recaudar
        fondos destinados a nuestra fundación.`,
          `Somos reconocidos por ASDESILLA.`,
        ],
        imageSrc: Horse,
        ctaHref: "/",
        id: Math.random() * 10 * Math.random(),
      },
      {
        title: "Donaciones",
        description: [
          `¡Sería genial contar con tu ayuda! Puedes depositar tu aporte en nuestras cuentas de ahorros. Necesitamos alimentos, 
        ropa, accesorios, muebles, electrodomésticos y segundas de fábrica`,
        ],
        imageSrc: Donation,
        ctaHref: "/",
        id: Math.random() * 10 * Math.random(),
      },
    ],
  },
};

export default homePageData;
