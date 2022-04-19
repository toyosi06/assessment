import React from 'react'
import App from '../App'; 
import {useNavigate } from "react-router-dom";

function Emailsent (){
    const navigate = useNavigate()
    return (
        <div>
         <img src="images/airplane2.png" alt="pic" width="560" height="200" className="absolute right-[0px] absolute top-[-30px]"></img> 
    <h1 className='text-7xl font-extrabold text-left absolute top-[260px] ml-5 text-sky-700'> Email Sent Successfully </h1>
     <h1 className='font-light text-5xl absolute top-[340px] ml-5'> Check your email to receive further information on the steps to reset your password</h1>
     <div className='text-center mb-10 text-3xl bg-blue-400 w-[400px] h-[80px] rounded-lg absolute bottom-[10px] right-[130px] hover:bg-blue-800'>
                  <button onClick={() => {navigate("/login")}} type="submit" className=' font-sans font-extrabold text-white'> <div className='relative bottom-[-18px]'> Back to Login </div> </button> </div> 
        
             </div>
    )

} 
export default Emailsent

