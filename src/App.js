import './App.scss';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import HowToHelp from './components/HowToHelp/HowToHelp.jsx';
import OfferedServices from './components/OfferedServices/OfferedServices.jsx';

import arrayHowToHelpCardsData from './data/arrayHowToHelpCardsData.js';

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
        <OfferedServices />
        <HowToHelp
          cardsData={arrayHowToHelpCardsData}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
