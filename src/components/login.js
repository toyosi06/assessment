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

        <div className='background_image'>
            <div>
                <nav className='navbar'>
                    <div className="brand-title"> JHBcodes</div>
                    <div className="navbar-links">
                        <ul>
                            <li> <Link to="about" >About</Link> </li>
                            <li> <Link to="signup">Sign Up</Link> </li>
                            <li> <Link to="contactus">Contact Us</Link> </li>
                        </ul>
                    </div>
                </nav>
            </div>1
            <div className="grid grid-rows-2">
                <div>
                    <header className='text-center text-3xl text-white font-serif'>
                        <h1> Welcome </h1>
                    </header>
                </div>
                <div className='grid grid-cols-2'>
                    <div className='box-border w-[600px] h-[500px] absolute top-[200px] left-[450px] p-[100px] bg-white opacity-75 text-center shadow-2xl rounded-lg'>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='text-center font-serif text-2xl text-orange-900'> <h2 className='text-center gap-20'>Log In</h2></div>
                            
                            <div className='text-center'> <label for="email" className='text-xl'> Email</label>
                                <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Enter Email" /></div>
                            
                            <div className="text-red-500 text-xs">  {formik.errors.email} </div>
                            
                            <div> <label> Password</label>
                                <input type="password" name="password" id="password" onChange={formik.handleChange} value={formik.values.password} placeholder="Enter Password" /></div>
                            <div className="text-red-500 text-xs"> {formik.errors.password}</div>
                            <button className="bg-sky-500" type="submit">Submit </button>
                            
                            <div className= "text-red-500 text-xs"> {serverError}</div>

                        </form>


                        <nav className=''> <Link to="forgotpassword">Forgot Password</Link> </nav>

                    </div>


                </div>
            </div>


        </div>
    )
}
export default Login