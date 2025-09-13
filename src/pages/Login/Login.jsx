import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login,signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  const [signstate,setsignstate]=useState("Sign In");
  const [name,setname]=useState("");
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("");
    const [loading,setloading]=useState(false);
  
  const handlesigninstate=()=>{
    setsignstate("Sign In")
  }
   const handlesignupstate=()=>{
    setsignstate("Sign Up")
  }
  const user_auth=async(event)=>{
    event.preventDefault();
    setloading(true)
    if(signstate==="Sign In"){

      await login(email,password)
    }else{
      await signup(name,email,password)
    }
    setloading(false)

  }

  return (
   loading?<div className="login-spinner w-full h-screen flex items-center justify-center ">
    <img src={netflix_spinner} alt=""  className='w-15'/>
   </div>:
    <div className='login h-screen py-5 px-[8%]' >
      <img src={logo} alt="" className='login-logo w-32'/>
      <div className="login-form w-full max-w-[450px] bg-[rgba(0,0,0,0.75)] rounded p-15 m-auto">
        <h1 className='text-[32px] font-medium mb-7 '>{signstate}</h1>
        <form className='login-form' >
          {signstate==="Sign Up"?<input  type="text" value={name} onChange={(event)=>{setname(event.target.value)}} placeholder='Your name' />:<></> }   
          <input type="email" value={email} onChange={(event)=>{setemail(event.target.value)}}  placeholder='E-mail' />
          <input type="password" value={password} onChange={(event)=>setpassword(event.target.value)} placeholder='Password' />
          <button onClick={user_auth} type='submit' className=' w-full border-0 outline-none p-2 bg-[#e50914] text-white rounded text-[20px] font-medium mt-5 cursor-pointer'   >{signstate}</button>
          <div className='form-help flex items-center justify-between text-[#b3b3b3] text-base'>
            <div className='remember flex items-center gap-[5px] '>
              <input type="checkbox" className='w-[18px] h-[18px]' />
              <label htmlFor="">RememberMe</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch mt-10 text-[#737373]">
          {signstate==="Sign In"? <p>New to Netflix?<span className='ml-[6px] text-white font-medium cursor-pointer' onClick={handlesignupstate}>Sign Up Now</span></p>:  <p>Already have account?<span className='ml-[6px] text-white font-medium cursor-pointer' onClick={handlesigninstate}>Sign In Now</span></p>}
         
         
        </div>
      </div>
    </div>
  )
}

export default Login