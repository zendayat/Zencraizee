import React from 'react'
import './About.css'
import pic3 from '../../assets/pic3.jpg'
import {SiInstagram} from 'react-icons/si'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BiLogoGmail} from 'react-icons/bi'
import { motion } from "framer-motion"
import {fadeIn} from '../../variants'

const About = () => {
  return (
    <div className='About_container text-center align-middle justify-center mx-auto pt-14 sm:pt-20 h-fit' id='about'>
      <div className=' h-fit w-fit bg-[var(--color-secondary)] mx-auto px-2 py-1 rounded-md'>
        <h6 className='text-sm font-semibold'>MY NAME IS ALLY</h6>
      </div>
      <h2 className=' text-3xl'>ABOUT ME</h2>
      <div className='flex flex-col md:flex-row md:justify-between md:px-12'>
        <motion.div 
        variants={fadeIn('right', 0.2)}
        initial= 'hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.4}}
        className='About_card w-[85vw] md:w-[40vw] lg:w-[30vw] h-fit lg:h-80 md:pb-3 lg:pb-0 border-4 rounded-xl border-purple-600 bg-[#554949] mt-44'>
          <img src={pic3} className=' object-cover h-56 lg:w-60 md:w-52 w-60 relative -mt-40 rounded-xl border-2 border-black mx-auto'/>
          <div className='about_content mx-auto w-[80%] mt-10 md:mt-5 lg:mt-10'>My name is Ally Chimerah.
            I am a dedicated front-end Developer based in
            Kenya. I love bringing designs to life and and am
            always happy to put my skills into action.
          </div>
          <div className='line w-[90%] h-[3px] bg-gradient-to-r from-purple-600 to-black rounded-full mx-auto mt-5'></div>
          <div className='mt-6 md:mt-3 text-center justify-center align-middle items-center flex flex-col lg:flex-row gap-5 lg:gap-10 ml-auto'>
            <ul className=' flex gap-6 text-center items-center'>
              <li><a href='mailto:zencraizee@gmail.com' className=' text-black'><BiLogoGmail className=' text-2xl'/></a></li>
              <li><a href='https://www.instagram.com/zen.craizee/' target='_blank' className=' text-black'><SiInstagram className=' text-2xl'/></a></li>
              <li><a href='https://api.whatsapp.com/send?phone+254776193802' target='_blank' className=' text-black'><IoLogoWhatsapp className=' text-2xl'/></a></li>
            </ul>
            <button className='btn pt-1 w-fit h-10 text-center justify-center align-middle flex px-3 rounded-lg font-bold'>Let's Work Together</button>
          </div>
        </motion.div>
        <motion.div
        variants={fadeIn('left', 0.2)}
        initial= 'hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.4}}
        className='skills_card w-[85vw] md:w-[45vw] lg:w-[40vw] h-fit md:h-80 bg-[#554949] mt-16 md:mt-40 rounded-xl border-purple-600 border-4'>
          <div className='heading mt-5 text-center align-middle justify-center'>
            <h6 className='text-sm'>Practical Languages & Libraries</h6>
            <h2 className='text-xl'>MY SKILLSET</h2>
          </div>
          <div className=' flex flex-col md:flex-row lg:justify-between md:gap-8 items-center w-[95%] md:w-[80%] mx-auto  mt-12'>
            <div className='languages border-2 rounded-lg border-white w-36 md:w-40 h-fit pb-5 mt-5'>
              <h6 className=' font-semibold relative -mt-12 text-white'>Languages Mastered</h6>
              <div className='mt-3'>
                <ul>
                  <li className='text-black font-semibold'>HTML</li>
                  <li className='text-black font-semibold'>CSS</li>
                  <li className='text-black font-semibold'>JS</li>
                  <li className='text-black font-semibold'>Java</li>
                </ul>
              </div>
            </div>
            <div className='w-36 md:w-40 h-fit flex flex-col gap-[3rem]'>
              <div className='frameworks border-2 rounded-lg md:border-purple-600 w-[100%] h-16'>
                <h6 className=' font-semibold relative -mt-6 text-white'>Libraries</h6>
                <div className='mt-3'>
                  <ul>
                    <li className='text-black font-semibold'>React JS</li>
                  </ul>
                </div>
              </div>
              <div className=' border-2 rounded-lg md:border-purple-600 w-[100%] h-16'>
                <h6 className=' font-semibold relative -mt-6 text-white'>Frameworks</h6>
                <div className='mt-3'>
                  <ul>
                    <li className='text-black font-semibold'>Tailwind CSS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default About
