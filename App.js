// src/App.js
import React from 'react';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Features from './components/Features';
import Subscribe from './components/Subscribe';
import Feedback from './components/Feedback';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Banner />
      <Categories />
      <Features />
      <Subscribe />
      <Feedback />
      <Footer />
    </div>
  );
};

export default App;
