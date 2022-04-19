import React from 'react'
import App from '../App'; 

function Contactus ({ }){
    return ( 
        <form>
        <div className='bg-indigo-400 h-screen'> 
        <div className='grid grid-rows-2 w-[650px] h-[550px] bg-white absolute top-[60px] left-[25px]
             rounded-lg shadow-lg shadow-gray-500/100 '>
            <h1 className='text-7xl font-extrabold text-violet-700 text-center'> Get in Touch</h1>
             <div className='grid grid rows-2 absolute top-[90px] left-[30px]'> <label className='text-left font-light text-blue-500 text-xl'> First Name</label>
                      <input name="firstName" type="text" placeholder="Enter First Name" className='text-center text-2xl text-center border-solid border-2' /> </div> 
                      <div className='grid grid rows-2 absolute top-[90px] right-[50px]'> <label className='text-left font-light text-blue-500 text-xl'> Last Name</label>
                      <input name="lastName" type="text" placeholder="Enter Last Name" className='text-center text-2xl text-center border-solid border-2 ' /> </div> 
        </div> 
            <img src="images/contactus2.png" alt="hey" width="650" height="300" className="absolute top-[20px] right-[50px]"></img>
        </div> 
        </form> 
    )
}
export default Contactus