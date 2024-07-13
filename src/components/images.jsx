import React from 'react'
import Html from '../images/css.png'
import Css from '../images/html.png'
import Js from '../images/js.png'


const Images = () => {
  return (
    <div className='flex flex-wrap items-center justify-center'>
      <div className='text-center'>
        <h1>CSS</h1>
      <img src={Css} />
      </div>
      <div className='text-center'>
        <h1>HTML</h1>
        <img src={Html} />
      </div>
      <div className='text-center'>
        <h1>JS</h1>
      <img src={Js} />
      </div>
    </div>
  )
}

export default Images
