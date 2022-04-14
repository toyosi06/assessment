import React, { useState } from 'react';
import App from '../App';
import logo from '../logo.svg';
import { useFormik } from "formik";
import { resetPassword } from '../services/auth';

function ForgotPassword() {
   const [serverError, setServerError] = useState("")
   const formik = useFormik({
      initialValues: {
         email: "",
      },
      onSubmit: (values) => {
         console.log(values)
         resetPassword(values, onSuccess, onFailure);
      },
      onSubmit: (values, onSuccess, onFailure) => {
      }
   })
   const onSuccess = () => {
      {
         //callbackonsuccess
      }

   }
   const onFailure = (message) => {
      setServerError(message);
   }
   return (
      <div className='grid grid-cols-2 h-screen bg-blue-300'>
         <div className="ml-6 mt-10 absolute top-[140px]">
            <img src="images/forgotp.png" alt="pic" width="510" height="900"></img>
         </div>
         <div className='grid grid-rows-2 w-[450px] h-[500px] bg-white absolute top-[200px] right-[325px]
            px] rounded-lg '> 
         <div> 
            <header className='text-center' >
               <h1> Reset Password</h1>
            </header>
         </div>
         <div className=''> 
            <label> Email</label>
            <input type="text" name="Email:" placeholder="Enter Email" />
         </div>
         <div>
            <input type="submit" name="Submit" value="submit"></input>
         </div> 
         </div>
      </div>



   )
}
export default ForgotPassword