import './App.css';
import React, { useEffect, useRef, useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const scrollAreaRef = useRef();

  const increaseNumber = () => {
    setNumber(prev => prev + 1);
  }

  const decreaseNumber = () => {
    setNumber(prev => prev -1);
  };

  const removeScrollDescreasing = () => {
    scrollAreaRef.current.removeEventListener('scroll', decreaseNumber);
  }

  const addScrollDescreasing = () => {
    scrollAreaRef.current.addEventListener('scroll', decreaseNumber);
  }

  useEffect(() => {
    addScrollDescreasing();
  }, []);

  return (
    <div className="App">
      <p className="counter">{number}</p>
      <button onClick={increaseNumber} className="button">+1</button>
      <div className="hover-zone" ref={scrollAreaRef}>
        <span>Scroll here to decrease number</span>
      </div>
      <button onClick={addScrollDescreasing} className="button">Add Scroll Decreasing</button>
      <button onClick={removeScrollDescreasing} className="button">Remove Scroll Decreasing</button>
    </div>
  );
}

export default App;
