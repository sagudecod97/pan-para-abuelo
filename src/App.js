import './App.scss';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import objectCarouselImagesData from './data/objectCarouselImagesData.js';

import ImagesCarousel from './components/ImagesCarousel/ImagesCarousel.jsx';

function App() {
  return (
    <div
      className='App'
    >
      <Header />
      <main
        className='main' 
        role='main'
      >
        <ImagesCarousel
          label={objectCarouselImagesData.label}
          imagesArray={objectCarouselImagesData.imagesArray}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
