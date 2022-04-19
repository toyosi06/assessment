import React, { useState } from 'react'
import App from '../App'
import { Link, useNavigate } from "react-router-dom";

function About (){
    return <div className='background_image' > 
    <div className='navbar'>
                    <div className="brand-title"> JHBcodes</div>
                    <div className="navbar-links">
                        <ul>
                        <li> <Link to="/login">Login</Link> </li>
                            <li> <Link to="/signup">Sign Up</Link> </li>
                            <li> <Link to="/contactus">Contact Us</Link> </li>
                        </ul>
                    </div>
    </div>
    <div className=' w-[700px] h-[300px] absolute top-[140px] left-[370px] bg-blue-900 opacity-75 text-center shadow-2xl rounded-lg'> 
    <h1 className='font-extrabold text-white text-5xl absolute top-[20px] absolute left-[130px]'> What is JHBCodes?</h1>
    <p className='font-sans font-light text-2xl text-left absolute top-[90px] text-center text-white'> JHBCodes is a branch of Jesus House Baltimore that has the goal of teaching young minds the ins and outs of programming. Using our talented and knowledgable IT team at JHB, after each coding session it is guaranteed that the student will gain further insight on different programming types such as CSS, JavaScript, HTML, etc. </p>
    </div>
    <div className='background2_image absolute top-[1040px]'> 
    <div className=' w-[900px] h-[440px] bg-orange-200 absolute top-[70px] left-[280px] rounded-lg opacity-50 '>  
    <h1 className='text-4xl font-extrabold text-center relative top-[30px] text-orange-900 font-serif'> Jesus House Baltimore's Mission Statement</h1>
    <p className='relative top-[50px] text-4xl text-center text-black font-light'> The Mission of Jesus House Baltimore is to bring people to the realization of the fulfillment of their God given dreams and potentials, and to teach people the Word of God with integrity. Jesus House Baltimore aims to build up responsible men and women that are confident in their God given rights, which in turn will enable them to impact and change society. Armed with the knowledge of their position in Christ, believers will </p>
    </div>
    </div>

<div className=' w-[500px] h-[500px] bg-blue-200 absolute top-[515px] right-[60px] rounded-lg opacity-75 shadow-blue-500/50'>
    <h1 className='text-4xl font-extrabold text-center relative top-[30px] text-white'> Why Our Program?</h1>
    <p className='text-3xl relative top-[50px] text-center font-light'> Not only does our program aid students in gaining a greater understanding in the future of technology, it also teaches them core values. Students are taught to be conscientious, responsible and more traits which are needed to get forward in life. Not to mention, the knowledge given to students from our program can help them to get work in the future.  </p>
     </div> 
<img src="images/aboutpic2.png" alt="hey" width="700" height="300" className="absolute top-[550px] left-[50px]"></img>
    </div>


}

export default About