import React from 'react'
import App from '../App'; 

function Homepage (){
    return (
        <div className="grid grid-cols-2 bg-blue-200 h-screen"> 
        <div className=' grid grid-rows-2 w-[450px] h-[400px] bg-blue-300 absolute top-[130px] 
            px] rounded-lg shadow-lg shadow-gray-500/100'> 
            <h1 className='font-sans text-7xl font-extrabold text-white absolute top-[50px]' >Welcome to JHBcodes!</h1>
            <div className='text-center mb-10 text-3xl bg-blue-400 w-[200px] h-[50px] rounded-lg absolute bottom-[10px] right-[130px]'>
            <button type="submit" className=' font-sans font-extrabold text-white'> Get Started </button>
            </div> 
        </div>
        <div>
              <img src="images/image.jpg" alt="pic" width="1000" height="100" className='h-screen absolute right-[0px]' ></img>
         </div>
        </div>
    )

} 
export default Homepage