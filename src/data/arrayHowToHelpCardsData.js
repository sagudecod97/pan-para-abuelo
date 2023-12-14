import Volunteering from '../assets/images/volunteering.png';

const arrayHowToHelpCardsData = [
  {
    title: 'Voluntariado',
    description: [`Únete a nosotros para hacer la diferencia. Si deseas contribuir con tu tiempo o experiencia profesional, 
    estamos emocionados por conocerte. ¡Juntos podemos lograr cosas asombrosas!`],
    imageSrc: Volunteering,
    ctaHref: '',
    id: ((Math.random() * 10) * Math.random()),
  },
  {
    title: 'Redenciones',
    description: [
    `Rinde homenaje a tus seres queridos fallecidos haciendo una donación a Pan Para un Abuelo. Como muestra de agradecimiento, recibirás un obsequio conmemorativo.`,
  ],
    imageSrc: Volunteering,
    ctaHref: '',
    id: ((Math.random() * 10) * Math.random()),
  },
  {
    title: 'Comprando en el Ropero',
    description: [`¡Descubre moda con propósito en nuestro ropero! Cada compra no solo te brinda estilo, sino que también apoya a nuestros queridos abuelos. 
    ¡Haz de tu elección de moda un gesto significativo!`],
    imageSrc: Volunteering,
    ctaHref: '',
    id: ((Math.random() * 10) * Math.random()),
  },
  {
    title: 'Compra o dona un salto',
    description: [`Recibimos generosas donaciones de saltos de parte de propietarios de caballos. Estos elementos se subastan o rifan para recaudar
    fondos destinados a nuestra fundación.` `Somos reconocidos por ASDESILLA.`],
    imageSrc: Volunteering,
    ctaHref: '',
    id: ((Math.random() * 10) * Math.random()),
  },
];

export default arrayHowToHelpCardsData;
