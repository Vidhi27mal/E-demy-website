import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px:36 text-left w-full mt-10'>
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center
         gap-10 md:gap-32 py-10 md:gap-32 py-10 border-b border-white/30'>
          <div className='flex flex-col items-start items-start w-full'>
          <img src={assets.logo_dark} alt="logo" />
          <p className='mt-6 text-center md:text-left text-sm text-white/80'>
          this webiste is totally handmade is the matter is not yet fixed</p>
        </div>
        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-semibold text-white md-5'>Company</h2>
            <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
              <li><a href="#">Home</a></li>
              <li><a href="#">About US</a></li>
              <li><a href="#">Contact US</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          
        </div>
        <div className='hidden md:flex flex-col items-start w-full'>
          <h2 className='font-semibold text-white md-5'>Support</h2>
          <p className='text-sm text-white/80'>latest news articles and resources</p>
          <div className='flex items-center gap-2 pt-4'>
            <input type="email"   placeholder='enter your email'/>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2'>Subscribe</button>
          </div>

        </div>

      </div>
      <p className='py-4 text-center text-xs md:text-sm text-white/60'>Copyright 2025 @E-learning All rights Reserved</p>
    </footer>
  )
}

export default Footer
