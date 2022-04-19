import React, { useState } from 'react';
import App from '../App';
import logo from '../logo.svg';
import { Link, useNavigate } from "react-router-dom";
import { loginvalidationSchema } from '../form-utils';
import { useFormik } from "formik";
import { signIn } from '../services/auth';
import Home from './secure/home';


function Login() {
 const [processing, setProcessing] = useState(false)
    const navigate = useNavigate()
    const [serverError, setServerError] = useState("")
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log(values)
            signIn(values, onSuccess, onFailure);
        },
        validationSchema: loginvalidationSchema,
        
    })
    const onSuccess = () => {
        {
            navigate ("/home"); 
        }

    }
     
        const onFailure = (message) => {
    
        setServerError("The username or password you entered is invalid!");
       
    }
   


    return (

        <div className='firstbg_image'>
            <div className='navbar'>
                    <div className="brand-title"> JHBcodes</div>
                    <div className="navbar-links">
                        <ul>
                        <li> <Link to="/about">About</Link> </li>
                            <li> <Link to="/signup">Sign Up</Link> </li>
                            <li> <Link to="/contactus">Contact Us</Link> </li>
                        </ul>
                    </div>
            </div>
            <div className="grid grid-rows-2">
                <div className=''>
                    <div className='box-border w-[700px] h-[500px] absolute top-[140px] left-[370px] p-[100px] bg-blue-100 opacity-100 text-center shadow-2xl rounded-lg'>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='text-center font-sans font-extrabold text-5xl text-blue-500 absolute top-[20px] left-[280px] '> <h1 className='text-center '>Log In</h1></div>
                            
                            <div className='text-center grid grid rows-2 relative top-[30px]'> <label className='text-xl grid grid-rows-1 text-left font-light text-blue-500'> Email</label>
                                <input className= "text-3xl text-center border-solid border-2 rounded-lg"type="email" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Enter Email" /></div>
                            
                            <div className="text-red-500 text-xs relative top-[40px]">  {formik.errors.email} </div>
                            
                            <div className='grid grid rows-2 text-left relative top-[30px]'> <label className='text-xl font-light text-blue-500'> Password</label>
                                <input className='text-3xl text-center border-solid border-2 rounded-lg' type="password" name="password" id="password" onChange={formik.handleChange} value={formik.values.password} placeholder="Enter Password" /></div>
                            <div className="text-red-500 text-xs relative top-[35px]"> {formik.errors.password}</div>
                            <button className="bg-blue-500 absolute bottom-[65px] left-[270px] text-center mb-10 text-3xl hover:bg-blue-800 w-[180px] h-[55px] rounded-lg shadow-lg shadow-blue-300/100 text-white" type="submit">Submit </button>
                            
                            <div className= "text-red-500 text-xs absolute bottom-[170px] right-[210px]"> {serverError} </div>

                        </form>


                        <div className="absolute bottom-[60px] left-[285px] text-xl text-blue-400 hover:text-blue-800" onClick={() => {navigate("/forgotpassword")}} >  Forgot Password </div>

                    </div>


                </div>
            </div>


        </div>
    )
}
export default Login