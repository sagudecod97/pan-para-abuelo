import './App.scss';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

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
      </main>
      <Footer />
    </div>
  );
}

export default App;
