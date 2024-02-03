import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import HomePage from "./pages/HomePage/HomePage.jsx";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage.jsx";
import ServicesPage from "./pages/ServicesPage/ServicesPage.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/about-us" index element={<AboutUsPage />} />
          <Route path="/services" index element={<ServicesPage />} />
        </Route>
      </Routes>
      <Header />
      <main className="main" role="main"></main>
      <Footer />
    </div>
  );
}

export default App;
