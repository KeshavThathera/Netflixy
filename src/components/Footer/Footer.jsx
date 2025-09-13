import React from 'react'
import youtube_icon from '../../assets/youtube_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
const Footer = () => {
  return (
    <div className='footer px-[30px] py-[4%] max-w-[1000px] my-0 mx-auto '>
        <div className="footer-icons flex gap-5 my-10 mx-0">
         <a href="https://www.instagram.com/keeshavv.vvv?igsh=bHhhbHlneWczbG5z"><img src={facebook_icon} alt="" className='footer-icons hover:scale-110 hover:text-pink-600 transition duration-300' /></a> 
           <img src={instagram_icon } alt="" className='footer-icons '/>
            <img src={twitter_icon} alt="" className='footer-icons'/>
             <img src={youtube_icon} alt="" className='footer-icons' />
        </div>
        <ul className='grid grid-cols-[auto_auto_auto_auto] gap-4 mb-[30px] list-none '>
          <li>Audio Description</li>
          <li>Help Centre</li>
          <li>Gift Cards </li>
          <li>Media Centre</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy </li>
          <li>Cokkie prefernces</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
        <p className='copyright-text text-grey-600 text-sm  '>1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer