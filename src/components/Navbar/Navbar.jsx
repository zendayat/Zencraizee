import React, {useState} from 'react'
import './Navbar.css'
import {SiInstagram} from 'react-icons/si'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  const [Nav_menu, setNavMenu] = useState('menu hidden')
  const [isToggleClicked, setIsToggleClicked] = useState(false)

  const toggleMenu = () => {
    if (!isToggleClicked){
        setNavMenu('menu visible')
    }
    else{
        setNavMenu('menu hidden')
    }
    setIsToggleClicked(!isToggleClicked)
  }



  return (
    <div className='navbar w-[100vw] fixed'>
        <div className='Navbar md:w-[50vw] lg:w-[40vw] flex sm:justify-between sm:ml-auto py-3 pr-4 text-center items-center'>
            <div className='socials hidden sm:block'>
                <ul className=' flex md:gap-8 lg:gap-12 text-center items-center'>
                    <li><a href='https://www.instagram.com/zen.craizee/' target='_blank'><SiInstagram className=' text-2xl'/></a></li>
                    <li><a href='https://api.whatsapp.com/send?phone+254776193802' target='_blank'><IoLogoWhatsapp className=' text-2xl'/></a></li>
                    <li><a href='https://github.com/zendayat' target='_blank'><BsGithub className=' text-2xl'/></a></li>
                    <li><a href='https://twitter.com/CraizeeIdo' target='_blank'><BsTwitter className=' text-2xl'/></a></li>
                    <li><button className='Menu_btn btn px-4 py-2 rounded-lg border border-[#750f72]'><a href='#contact' className='text-black hover:text-black'>Hire Me</a></button></li>
                </ul>
            </div>
            <div className='menu_icon relative sm:ml-auto'>
                <GiHamburgerMenu className=' text-2xl'  onClick={toggleMenu}/>
            </div>
      
        </div>
        <div className={Nav_menu}>
          <div>
            <ul className='flex flex-col gap-9'>
              <li><a href='#' className='text-black'>Home</a></li>
              <li><a href='#about' className='text-black'>About Me</a></li>
              <li><a href='#services' className='text-black'>Services</a></li>
              <li><a href='#portfolio' className='text-black'>Portfolio</a></li>
              <li><a href='#contact' className='text-black'>Contact Me</a></li>
            </ul>
          </div>
          <div>
            <ul className=' flex gap-4 text-center items-center mt-10'>
              <li><a href='https://www.instagram.com/zen.craizee/' target='_blank'><SiInstagram className=' text-xl'/></a></li>
              <li><a href='https://api.whatsapp.com/send?phone+254776193802' target='_blank'><IoLogoWhatsapp className=' text-xl'/></a></li>
              <li><a href='https://github.com/zendayat' target='_blank'><BsGithub className=' text-xl'/></a></li>
              <li><a href='https://twitter.com/CraizeeIdo' target='_blank'><BsTwitter className=' text-xl'/></a></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar
