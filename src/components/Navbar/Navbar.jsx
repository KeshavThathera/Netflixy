import React, { useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { useRef } from 'react'
import { logout } from '../../firebase'
const Navbar = () => {
  const navref=useRef();

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=90){
        navref.current.classList.add('nav-dark')
      }else{
         navref.current.classList.remove('nav-dark')
      }
    })
  },[])
  return (
    <div ref={navref} className='Navbar w-full py-5 px-[6%] flex justify-between fixed text-[14px] text-[#e5e5e5] backdrop-blur- '>
        <div className='navbar-left flex items-center gap-[50px] '>
            <img src={logo} alt="" className='w-[90px] nav-options' />
            <ul className='flex gap-5 ' >
                <li className='nav-options '>Home</li>
                <li className='nav-options'>TV Shows</li>
                <li className='nav-options'>New & Popular</li>
                <li className='nav-options'>Movies</li>
                <li className='nav-options'>My List</li>
                <li className='nav-options'>Browse by Languages</li>
            </ul>
            </div>
        <div className='navbar-right flex gap-5 items-center'>
            <img src={search_icon} alt="" className='icons nav-options ' />
            <p className='nav-options'>Children</p>
             <img src={bell_icon} alt="" className='icons nav-options' />

             <div className='navbar-profile flex items-center cursor-pointer gap-[10px] relative nav-options '>
                <img src={profile_img} alt="" className='profile rounded-sm w-[35px] '/>
                <img src={caret_icon} alt="" />
                <div className="dropdown absolute top-full right-0 w-max bg-[#191919] py-[18px] px-[22px] hidden">
                  <p className='cursor-pointer text-[13px]' onClick={()=>{
                    logout()
                  }}>Sign Out of Netlfix</p>
                  <p className='cursor-pointer text-[13px]' >Settings</p>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Navbar