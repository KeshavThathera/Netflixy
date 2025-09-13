import React, { useState,useEffect } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Player = () => {
  const {id}=useParams();
  const navigate=useNavigate();
  const [videodata,setvideodata]=useState({name:"",
    key:"",
    type:"",
    published_at:""
  })
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTUzMjAyYjUwZGI2M2Q5ZGE1NWY5YzkwODIyOTk5YSIsIm5iZiI6MTc1Nzc1MDY0Ny4yMTgsInN1YiI6IjY4YzUyNTc3N2NjMjQ4OTk2YWE4NWZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HcquXMdnnkKM0aMNzcwb2bHqVVI21NS_N2zbcNQA1ak'
  }
};
  useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setvideodata(res.results[0]))
  .catch(err => console.error(err));
},[])
  return (
    <div className='player h-screen flex flex-col justify-center items-center '>
      <img src={back_arrow_icon} alt="" className='absolute top-5 left-5 w-[50px] cursor-pointer' onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${videodata.key}`} title='trailer' frameBorder='0' allowFullScreen className='rounded-[10px]'></iframe>
      <div className="player-info flex items-center justify-between w-[90%]">
        <p>Published Date:{videodata.published_at.slice(0,10)}</p>
        <p>Name:{videodata.name}</p>
        <p> type:{videodata.type}</p>
      </div>
    </div>
  )
}

export default Player