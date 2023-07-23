import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Avt1 from '../../assets/pic1.png'
import CV from '../../assets/RESUME.pdf'
import { motion } from "framer-motion"
import {fadeIn} from '../../variants'


const Home = () => {
  return (
    <div className='Home align-middle text-center justify-center flex flex-col'>
      <Navbar/>
      <div className='Avatar_box relative mt-12  mx-auto h-fit w-fit pb-6 flex-col text-center justify-center flex align-middle'>
        <motion.div
         variants={fadeIn('down', 0.3)}
         initial= 'hidden'
         whileInView={'show'}
         viewport={{once:false, amount:0.7}}
        className='Avatar mx-auto font-medium'>
          <img src={Avt1} className=' w-60 border-4 border-purple-700 rounded-full'/>
        </motion.div>
        <motion.div 
        variants={fadeIn('up', 0.3)}
        initial= 'hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.7}}
        className='text-center align-middle'>
          <h5 className='mt-3 font-semibold'>MY NAME IS</h5>
          <h2 className='  font-semibold mt-1 text-4xl'>Ally Chimerah</h2>
        </motion.div>
        <motion.div
        variants={fadeIn('up', 0.3)}
        initial= 'hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.7}}>
          <h5 className=' text-lg font-semibold text-[var(--color-primary)]'>Frontend Developer</h5>
          <div className=' text-center align-middle flex justify-center mx-auto'><h6>Nairobi, Kenya</h6></div>
        </motion.div>
        <motion.div
        variants={fadeIn('up', 0.6)}
        initial= 'hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.7}} className='flex gap-5 mx-auto mt-3'>
          <button className='btn px-4 py-2 rounded-lg border border-[#750f72]'><a href={CV} className='text-black hover:text-black'>My Resume</a></button>
          <button className='btn-secondary px-4 py-2 rounded-lg border border-[#750f72]'><a href='#contact' className='text-black hover:text-black'>Talk To Me</a></button>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
