import React from 'react';
import Heading from './components/heading';
import Calculator from './components/calculator';
import './App.css';

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-[#ECEEFA] xs:flex-col sm:flex-col md:flex-col lg:flex-row" >
      <Heading />
      <Calculator/>
    </div>
  );
}

export default App;
