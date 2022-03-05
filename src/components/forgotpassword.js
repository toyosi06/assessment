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
      <div>
      <div> 
         <header >
            <h1> Reset Password</h1>
         </header>
         <label> Email</label>
         <input type="text" name="Email:" placeholder="Enter Email" />
         <input type="submit" name="Submit" value="submit"></input>
      </div>
      <div> 
         <img src="images/forgotp.png" alt="pic" width= "800" height="600"></img>
      </div> 
      </div>



   )
}
export default ForgotPassword