import './App.scss';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import OfferedServices from './components/OfferedServices/OfferedServices.jsx';

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
      </main>
      <Footer />
    </div>
  );
}

export default App;
