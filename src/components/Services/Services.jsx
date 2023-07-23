import React from 'react'
import './Services.css'
import Web from '../../assets/web development.png'
import Photography from '../../assets/PHOTOGRAPHY.jpg'
import UI from '../../assets/UI_UX.png'


const Services = () => {
  return (
    <div className='Services_container text-center align-middle justify-center mx-auto pt-20' id='services'>
      <div className=' h-fit w-fit bg-[var(--color-secondary)] mx-auto px-2 py-1 rounded-md' >
        <h6 className='text-sm font-semibold'>LET'S GET TO WORK</h6>
      </div>
      <h2 className=' text-3xl'>WHAT I CAN DO FOR YOU</h2>
      <div className='flex flex-col lg:flex-row justify-between items-center px-12'>
        <div className='Services_card  w-[80vw] md:w-[55vw] lg:w-[20vw] h-fit pb-5 border-4 rounded-xl border-purple-600 mt-12'>
          <img src={Web} className=' object-cover h-56 w-60 mt-3 relative rounded-xl border-2 border-black mx-auto'/>
          <h2 className='services_content mx-auto w-[80%] mt-6'>WEB DEVELOPMENT</h2>
          {/* <h6>I am dedicated to crafting exceptional web development solutions tailored to your unique vision.</h6> */}
          <div className='line w-[90%] h-[3px] bg-gradient-to-r from-purple-600 to-black rounded-full mx-auto mt-5'></div>
          <button className='btn pt-1 w-fit h-10 text-center justify-center align-middle flex px-3 rounded-lg  mx-auto mt-5 font-bold'><a href='#contact' className='text-black hover:text-black'>Work With Me</a></button>
        </div>
        <div className='Services_card  w-[80vw] md:w-[55vw] lg:w-[20vw] h-fit  pb-5 border-4 rounded-xl border-purple-600 mt-12'>
          <img src={UI} className=' object-cover h-56 w-60 mt-3 relative rounded-xl border-2 border-black mx-auto'/>
          <h2 className='services_content mx-auto w-[80%] mt-6'>UI/UX DESIGN</h2>
          {/* <h6>With the growing digital world and the growing need for digital marketing. I am your creative guide </h6> */}
          <div className='line w-[90%] h-[3px] bg-gradient-to-r from-purple-600 to-black rounded-full mx-auto mt-5'></div>
          <button className='btn pt-1 w-fit h-10 text-center justify-center align-middle flex px-3 rounded-lg  mx-auto mt-5 font-bold'><a href='#contact' className='text-black hover:text-black'>Work With Me</a></button>
        </div>
        <div className='Services_card  w-[80vw] md:w-[55vw] lg:w-[20vw] h-fit  pb-5 border-4 rounded-xl border-purple-600 mt-12'>
          <img src={Photography} className=' object-cover h-56 w-60 mt-3 relative rounded-xl border-2 border-black mx-auto'/>
          <h2 className='services_content mx-auto w-[80%] mt-6'>PHOTOGRAPHY</h2>
          {/* <h6>Capturing the beauty of the world, the beautiful moments we want to re-live.</h6> */}
          <div className='line w-[90%] h-[3px] bg-gradient-to-r from-purple-600 to-black rounded-full mx-auto mt-5'></div>
          <button className='btn pt-1 w-fit h-10 text-center justify-center align-middle flex px-3 rounded-lg  mx-auto mt-5 font-bold'><a href='#contact' className='text-black hover:text-black'>Work With Me</a></button>
        </div>
        
        
      </div>
    </div>
  )
}

export default Services
