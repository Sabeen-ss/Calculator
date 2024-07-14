import React from 'react'

const Calculator = () => {
  return (
    <div className='bg-[#391C5A] text-white h-[15%] flex flex-col justify-center items-center pt-8 pb-8 w-72px px-3 font-bold border rounded-md mb-5 mt-3 sm:mt-5 '>
      {/* input */}
      <div className='bg-white flex justify-center items-center border rounded-md '>
        <input className='p-3 w-64 h-[5%] border-neutral-50 outline-none text-black font-normal text-right border rounded-sm' type='search' />
      </div><br></br>
      {/* buttons */}
      <div className='grid grid-cols-4 gap-4 w-72 h-[12%] p-3'>
        <button className='border border-[#4D377A] rounded-lg  py-2 px-4 bg-[#4D377A] shadow-md shadow-white text-white hover:bg-[#614697]'>ON</button>
        <button className='border border-[#4D377A] rounded-lg  py-2 px-4 bg-[#4D377A] shadow-md shadow-white text-white hover:bg-[#614697]'>(</button>
        <button className='border border-[#4D377A] rounded-lg  py-2 px-4 bg-[#4D377A] shadow-md shadow-white text-white hover:bg-[#614697]'>)</button>
        <button className='border border-[#4D377A] rounded-lg  py-2 px-4 bg-[#4D377A] shadow-md shadow-white text-white hover:bg-[#614697]'>/</button>
        <button className='border border-[#4D377A] rounded-lg  py-2 px-4 bg-[#4D377A] shadow-md shadow-white text-white hover:bg-[#614697]'>9</button>
        <button className='border border-[#4D377A] rounded-lg  py-2 px-4 bg-[#4D377A] shadow-md shadow-white text-white hover:bg-[#614697]'>8</button>
        <button className='border border-[#4D377A] rounded-lg  py-2 px-4 bg-[#4D377A] shadow-md shadow-white text-white hover:bg-[#614697]'>7</button>
        <button className='border border-[#4D377A] rounded-lg  py-2 px-4 bg-[#4D377A] shadow-md shadow-white text-white hover:bg-[#614697]'>*</button>
        <button className='border border-[#4D377A] rounded-lg  py-2 px-4 bg-[#4D377A] shadow-md shadow-white text-white hover:bg-[#614697]'>6</button>
        <button className='border border-[#4D377A] rounded-lg  py-2 px-4 bg-[#4D377A] shadow-md shadow-white text-white hover:bg-[#614697]'>5</button>
        <button className='border border-[#4D377A] rounded-lg  py-2 px-4 bg-[#4D377A] shadow-md shadow-white text-white hover:bg-[#614697]'>4</button>
        <button className='border border-[#4D377A] rounded-lg  py-2 px-4 bg-[#4D377A] shadow-md shadow-white text-white hover:bg-[#614697]'>-</button>
        <button className='border border-[#4D377A] rounded-lg  py-2 px-4 bg-[#4D377A] shadow-md shadow-white text-white hover:bg-[#614697]'>3</button>
        <button className='border border-[#4D377A] rounded-lg  py-2 px-4 bg-[#4D377A] shadow-md shadow-white text-white hover:bg-[#614697]'>2</button>
        <button className='border border-[#4D377A] rounded-lg  py-2 px-4 bg-[#4D377A] shadow-md shadow-white text-white hover:bg-[#614697]'>1</button>
        <button className='border border-[#4D377A] rounded-lg  py-2 px-4 bg-[#4D377A] shadow-md shadow-white text-white hover:bg-[#614697]'>+</button>
        <button className='border border-[#4D377A] rounded-lg  py-2 px-4 bg-[#4D377A] shadow-md shadow-white text-white hover:bg-[#614697]'>DEL</button>
        <button className='border border-[#4D377A] rounded-lg  py-2 px-4 bg-[#4D377A] shadow-md shadow-white text-white hover:bg-[#614697]'>0</button>
        <button className='border border-[#4D377A] rounded-lg  py-2 px-4 bg-[#4D377A] shadow-md shadow-white text-white hover:bg-[#614697]'>.</button>
        <button className='border border-[#4D377A] rounded-lg  py-2 px-4 bg-[#4D377A] shadow-md shadow-white text-white hover:bg-[#614697]'>=</button>
      </div>

    </div>
  )
}

export default Calculator