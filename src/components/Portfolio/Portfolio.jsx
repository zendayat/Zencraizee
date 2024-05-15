import React from 'react'
import './Portfolio.css'
import AVTR1 from '../../assets/Project1.png'
import AVTR2 from '../../assets/Project5.png'
import AVTR3 from '../../assets/Project3.png'
import AVTR4 from '../../assets/Project4.png'
import { motion } from "framer-motion"
import {fadeIn} from '../../variants'


const Data = [
    {
      avatar: AVTR1,
      id: 'Portfolio',
      languages: 'React JS',
      review: 'React Gym website.',
      site: 'https://zendayat.github.io/Gym/'
    },
    {
      avatar: AVTR2,
      id: 'Zen Car Rental',
      languages: 'React JS',
      review: 'React Website For a luxury transport service',
      site: 'https://zendayat.github.io/car-rental/'
    },
    {
      avatar: AVTR3,
      id: 'Grocery website',
      languages: 'HTML,CSS,JS',
      review: 'Frontend design for a simple groceries website',
      site: 'https://zendayat.github.io/grocery'
    },
    {
      avatar: AVTR4,
      id: 'Banking App',
      languages: 'react js with Tailwind',
      review: 'Frontend design for a banking app',
      site: 'https://zendayat.github.io/Bank-App-frontend/'
    }
  ]
const Portfolio = () => {

  return (
    <div className='portfolio_container pb-10 pt-16' id='portfolio'>
        <div className=' h-fit w-fit bg-[var(--color-secondary)] mx-auto mt-8 px-2 py-1 rounded-md'>
            <h6 className='text-sm font-semibold'>CHECK OUT MY WORK</h6>
        </div>
        <h2 className=' text-3xl'>MY PORTFOLIO</h2>
      <div className=' flex flex-col'>{
        Data.map(({avatar, id, languages, review,site}) => {
            return(
                <div className=' flex flex-col sm:flex-row items-center mx-auto gap-5 sm:gap-40 mt-6 w-fit h-fit border shadow-xl p-5 text-center align-middle justify-center'>
                    <div className=' h-fit w-fit'>
                        <img src={avatar} className=' object-cover h-72 w-[100%] sm:w-[40vw] border-b-2 border-purple-600 sm:border-none'/>
                    </div>
                    <div className='grid grid-cols-2 gap-5 sm:gap-0 sm:flex sm:flex-col details text-left align-middle justify-center w-fit h-fit py-5 px-5 my-auto'>
                        <div className=' h-fit w-fit py-1 px-3 rounded-xl bg-[var(--color-secondary)]'><h5>{languages}</h5></div>
                        <h2 className=' text-xl mt-3'>{id}</h2>
                        <p className='mt-3 text-[#000000a2]'>{review}</p>
                        <div className=' h-fit w-fit px-2 py-1 border-2 border-white bg-purple-600 mt-2 rounded-md shadow-purple-500 shadow-xl'><a href={site} className=' text-black font-semibold'>Live Preview</a></div>
                    </div>
                </div>
            )
        })
      }</div>
    </div>
  )
}

export default Portfolio
