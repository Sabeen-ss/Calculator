import React from 'react';
import Html from '../images/html.png';
import Css from '../images/css.png';
import Js from '../images/js.png';

const Heading = () => {
  return (
    <div
      className="flex flex-col sm:ml-0 sm:items-center sm:justify-center md:ml-0 md:items-center md:justify-center lg:mr-72 "
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif' }}
    >
      {/* headings part */}
      <div className=" flex flex-col text-center space-y-2 sm:space-y-0 mt-12 justify-center items-center  ">
        <h1 className="font-extrabold  text-[#3A1F5E] sm:text-4xl md:text-4xl lg:text-6xl">Simple</h1>
        <h1 className="font-extrabold  text-[#3A1F5E] sm:text-4xl md:text-4xl lg:text-6xl ">Calculator</h1>
        <p className="font-bold  text-[#5E4985] sm:text-3xl md:text-3xl lg:text-5xl">Using JavaScript</p>
      </div>
      {/* image part */}
      <div className='flex items-center justify-center relative sm:mt-9 sm:w-[113%] md:mt-9 md:w-[113%] lg:mt-24 lg:w-full'>
        <div className='text-center font-extrabold absolute  sm:left-1 md:left-1 lg:left-[17%]'>
          <h1>CSS</h1>
          <img className='w-[100px]' src={Css} alt='CSS' />
        </div>
        <div className='text-center font-extrabold z-20'>
          <h1>HTML</h1>
          <img className='w-[130px]' src={Html} alt='HTML' />
        </div>
        <div className='text-center font-extrabold absolute sm:right-0 md:right-0 lg:right-[15%] '>
          <h1>JS</h1>
          <img className='w-[100px]' src={Js} alt='JS' />
        </div>
      </div>
    </div>
  );
}

export default Heading;
