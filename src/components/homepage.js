import React from 'react'
import App from '../App'; 
import {useNavigate } from "react-router-dom";

function Homepage (){
    const navigate = useNavigate()
    return (
        <div className=" firstbg_image grid grid-cols-2 bg-blue-200 h-screen"> 
        <div className=' grid grid-rows-2 w-[800px] h-[400px] bg-blue-400 absolute top-[160px] 
            px] right-[330px] rounded-lg shadow-lg shadow-gray-500/100'> 
            <h1 className='font-sans text-7xl font-extrabold text-white absolute top-[75px] absolute left-[200px]' >Welcome to JHBcodes!</h1>
            <div onClick={() => {navigate("/login")}} className='text-center mb-10 text-3xl bg-blue-300 hover:bg-blue-800 w-[200px] h-[70px] rounded-lg absolute bottom-[10px] right-[300px] shadow-lg shadow-blue-600/100 '>
            <button type="submit" className=' font-sans font-extrabold text-white m-3 text-3xl'> Get Started </button>
            </div> 
        </div>
        <div>
              {/* <img src="images/image.jpg" alt="pic" width="1000" height="100" className=' h-screen absolute right-[0px]' ></img> */}
         </div>
        </div>
    )

} 
export default Homepage