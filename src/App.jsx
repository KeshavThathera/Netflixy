import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import  {auth} from './firebase'
 import { ToastContainer, toast } from 'react-toastify';
import Hopepage from './components/Jk/Hopepage'
import HopePageFooter from './components/Jk/HopePageFooter'

const App = () => {
  const navigate= useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("logged in")
        navigate('/')
      }else{
        console.log("logged out")
        navigate('/login')
      }
    })
  },[])
  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/hope' element={<Hopepage></Hopepage>}></Route>
         <Route path='/hope2' element={<HopePageFooter></HopePageFooter>}></Route>
        <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/player/:id' element={<Player/>}></Route>
      </Routes>
      
      
    </div>
  )
}

export default App