import React, { useState } from 'react';
import App from '../App';
import logo from '../logo.svg';
import { useFormik } from "formik";
import { resetPassword } from '../services/auth';
import { forgotpasswordvalidationSchema } from '../form-utils';
import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
   const [serverError, setServerError] = useState("")
   const navigate = useNavigate()
   const formik = useFormik({
      initialValues: {
         email: "",
      },
      onSubmit: (values) => {
         console.log(values)
         resetPassword(values, onSuccess, onFailure);
      },
      validationSchema: forgotpasswordvalidationSchema,
   })
   const onSuccess = () => {
      {
         navigate ("/emailsent"); 
      }

   }
   const onFailure = (message) => {
      setServerError("Please use a Real Email!");
   }
   return (
      <div className='grid grid-cols-2 h-screen  bg-blue-300'>
         <div className="absolute top-[30px] right-[40px] font-bold text-xl text-blue-600 hover:text-blue-800" onClick={() => {navigate("/login")}} >  Back to Login </div>
         <form onSubmit={formik.handleSubmit}>
            <div className="ml-6 mt-10">
               <div className='text-center grid grid-rows-2'> 
               <h1 className='text-5xl font-sans font-extrabold text-blue-900'>  Trouble Logging In? </h1>
                  <p className='text-4xl text-white font-sans font-semibold'>Enter your email to receive information to reset your password</p>
               </div>
               <img src="images/forgotp.png" alt="pic" width="660" height="900" className="absolute top-[230px]"></img>
            </div>
            
            <div className='grid grid-rows-2 w-[450px] h-[500px] bg-white absolute top-[130px] right-[140px]
            px] rounded-lg shadow-lg shadow-gray-500/100 '>
               <div>
                  <header className='text-center text-7xl font-extrabold text-blue-900' >
                     <h1> Reset Password</h1>
                  </header>
               </div>
               <div className="">
                  <div className='text-2xl ml-4 absolute top-[200px] font-sans font-light '> <label> Email</label> </div>
                  <div> 
                  <div className="text-center text-3xl border-solid border-2 sky-500 w-[310px] rounded-lg absolute right-[80px]"> <input type="text" name="email" id='email' placeholder="Enter Email" value={formik.values.email} onChange={formik.handleChange} /> </div> 
                     <div className="text-red-500 text-center absolute bottom-[190px] right-[190px]">  {formik.errors.email} </div>
                  </div>
               </div>
               <div className='text-center mb-10 text-3xl bg-blue-400 w-[200px] h-[50px] rounded-lg absolute bottom-[10px] right-[130px] hover:bg-blue-800'>
                  <button type="submit" className=' font-sans font-extrabold text-white'> Submit </button>
               </div>
               <div className= "text-red-500 absolute bottom-[160px] right-[160px]"> {serverError} </div>
            </div>
      
         </form>
      </div>




   )
}
export default ForgotPassword