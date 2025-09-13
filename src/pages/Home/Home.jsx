import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
const Home = () => {

  return (

    <div className='home'>
        <Navbar></Navbar>
        <div className="hero relative ">
          <img src={hero_banner} alt="" className='banner-img w-full' />
          <div className="hero-caption absolute w-full pl-[6%] bottom-0 ">
          <img src={hero_title} alt="" className='caption-img w-[90%] max-w-[420px] mb-[30px]' />
          <p className=' max-w-[700px] text-[17px] mb-5'>Into the Wild tells the true story of Christopher McCandless, a young man from a well-off family who rejects modern society and sets out on a journey of self-discovery across America.</p>
          <div className="hero-btns flex gap-[10px] mb-[50px] ">
            <button className='btn px-2 py-5 border-0 outline-none inline-flex items-center gap-[10px] text-black text-base font-semibold cursor-pointer  bg-white rounded h-5 hover:bg-[#ffffffbf]' ><img src={play_icon} alt="" className='w-[25px] ' /> Play</button>
              <button className='btn dark-btn px-2 py-5 border-0 outline-none inline-flex items-center gap-[10px] text-white text-base font-semibold cursor-pointer bg-[#6d6d6eb3] rounded h-6 hover:bg-[#6d6d6e66]' ><img src={info_icon} alt="" className='w-[25px]' /> More Info</button>
          </div >
          <TitleCards  />
          </div>
        </div>
        <div className="more-cards pl-[6%]">
          <TitleCards title="Popular" category="popular" />
          <TitleCards title="Top Rated" category="top_rated" />
          <TitleCards title="Upcoming" category="upcoming" />
           <TitleCards title="Now Playing" category="now_playing" />

        </div> 
        <Footer></Footer>
    </div>
  )
}

export default Home