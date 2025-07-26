import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <MainContent count={count} setCount={setCount} />
      <Footer />
    </div>
  );
}

export default App;