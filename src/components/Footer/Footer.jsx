import React from 'react'
import './Footer.css'
import {SiInstagram} from 'react-icons/si'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'

const Footer = () => {
  return (
    <div className='footer bg-slate-900 text-white'>
        {/* <div className=' mx-auto text-center justify-center items-center align-middle flex'>
            <ul className=' flex gap-12 text-center items-center'>
                <li><a href='#'><SiInstagram className=' text-2xl'/></a></li>
                <li><a href='#'><IoLogoWhatsapp className=' text-2xl'/></a></li>
                <li><a href='#'><BsGithub className=' text-2xl'/></a></li>
                <li><a href='#'><BsTwitter className=' text-2xl'/></a></li>
            </ul>
        </div> */}
        <h6 className=' mt-5 mb-3 font-semibold'>&copy;Created by Zencraizee</h6>
    </div>
  )
}

export default Footer