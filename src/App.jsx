
import Heading from './components/heading'

import Calculator from './components/calculator'
import './App.css'

function App() {


  return (
    <>
      <div className='min-h-screen flex justify-center items-center  sm:flex-col md:flex-col lg:flex-row '>
        <Heading />
        <Calculator />
      </div>
    </>
  )
}

export default App
