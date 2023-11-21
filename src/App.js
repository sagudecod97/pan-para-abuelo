import './App.scss';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import OldWhiteMan from './assets/images/oldman-looking-right.jpg';
import OldBlackMand from './assets/images/smiling-old-person.jpg';

import ImageSectionTemplate from './templates/ImageSectionTemplate/ImageSectionTemplate.jsx';

function App() {
  const arrayImages = [
    {
      type: 'img',
      image: OldWhiteMan,
      id: 'dadadasd',
    },
    {
      type: 'text',
      title: 'Section Title',
      id: 'dsw33erw',
    },
    {
      type: 'img',
      image: OldBlackMand,
      id: 'fesafe121',
    },
    {
      type: 'text',
      title: 'Section Title',
      id: 'vafdav332sda',
    },
    {
      type: 'img',
      image: OldWhiteMan,
      id: '323casadsa',
    },
    {
      type: 'text',
      title: 'Section Title',
      id: 'fasef323r4',
    },
    {
      type: 'img',
      image: OldBlackMand,
      id: 'gkkr32',
    },
    {
      type: 'text',
      title: 'Section Title',
      id: '23rfasf4t',
    },
  ];

  return (
    <div className="App">
      <Header />
      <main role='main' style={{ position: 'relative', paddingBottom: '900px' }}>
        <ImageSectionTemplate
          imagesArray={arrayImages}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
