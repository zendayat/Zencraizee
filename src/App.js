import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About'
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
