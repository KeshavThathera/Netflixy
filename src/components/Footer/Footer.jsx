import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { PiTwitterLogoFill } from 'react-icons/pi';
const Footer = () => {
  return (
    <div className='footer px-[30px] py-[4%] max-w-[1000px] my-0 mx-auto '>
        <div className="flex gap-5 my-10 mx-0">
          <a href="https://www.instagram.com/keeshavv.vvv?igsh=bHhhbHlneWczbG5z"><h1><FaInstagram className='footer-icons' ></FaInstagram></h1></a>
          <h1><FaFacebookMessenger className='footer-icons'/></h1>
            <h1><PiTwitterLogoFill className='footer-icons'/></h1>
            <a href=""> <h1><FaYoutube  className='footer-icons'/></h1></a>
            
        </div>
        <ul className='grid grid-cols-[auto_auto_auto_auto] gap-4 mb-[30px] list-none footer-li'>
          <li className='foot-options'>Audio Description</li>
          <li className='foot-options'>Help Centre</li>
          <li className='foot-options'>Gift Cards </li>
          <li className='foot-options'>Media Centre</li>
          <li className='foot-options'>Investor Relations</li>
          <li className='foot-options'>Jobs</li>
          <li className='foot-options'>Terms of Use</li>
          <li className='foot-options'>Privacy </li>
          <li className='foot-options'>Cokkie prefernces</li>
          <li className='foot-options'>Corporate Information</li>
          <li className='foot-options'>Contact Us</li>
        </ul>
        <p className='copyright-text text-grey-600 text-sm foot-options copyright '>1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer