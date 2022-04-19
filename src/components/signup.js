import { useFormik } from 'formik';
import React, { useState } from 'react';
import App from '../App';
import { signupvalidationSchema } from '../form-utils';
import logo from '../logo.svg';
import { signup } from '../services/auth';
import { FaSpinner } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";

function Signup(form) {
    const [processing, setProcessing] = useState(false)
    const navigate = useNavigate()
    const [serverError, setServerError] = useState("")
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            userName: "",
            password: "",
            confirmPassword: "",

        },
        onSubmit: (values) => {
            setProcessing(true)

            //call firebase to signup
            signup(values)
            setProcessing(false)

        },
        validationSchema: signupvalidationSchema,

    })
    const onSuccess = () => {
        {
            //callbackonsuccess
        }

    }
    const onFailure = (message) => {
        setServerError(message);
    }

    console.log(formik.errors)
    return (

        <div className='items-center text-center firstbg_image '>
             <div className='navbar'>
                    <div className="brand-title"> JHBcodes</div>
                    <div className="navbar-links">
                        <ul>
                        <li> <Link to="/about">About</Link> </li>
                            <li> <Link to="/login"> Login</Link> </li>
                            <li> <Link to="/contactus">Contact Us</Link> </li>
                        </ul>
                    </div>
                </div> 
            <div className='box-border w-[700px] h-[630px] absolute top-[70px] left-[370px] p-[100px]  bg-blue-100 opacity-100 text-center shadow-2xl rounded-lg'> 
            <header className='text-center text-3xl text-black font-serif mt-6'>
                <h1 className='text-center font-sans font-extrabold text-5xl text-blue-500 absolute top-[20px] left-[280px]'> Sign Up</h1>
            </header>
            <div className='text-center flex flex-col space-y-15'>
                <form onSubmit={formik.handleSubmit}>

                    <div className='grid grid rows-2 relative bottom-[40px]'> <label className='text-left font-light text-blue-500 text-xl'> First Name</label>
                      <input onChange={formik.handleChange} value={formik.values.firstName} name="firstName" type="text" placeholder="Enter First Name" className='text-center text-2xl text-center border-solid border-2 rounded-lg' /> </div> 

                        <div className="text-red-500 text-xs relative top-[-30px]">{formik.errors.firstName}</div>

                    <div className='grid grid rows-2 relative bottom-[30px]'> <label className='text-left font-light text-blue-500 text-xl'> Last Name</label>
                        <input name="lastName" onChange={formik.handleChange} value={formik.values.lastName} type="text" placeholder="Last Name" className='text-center text-2xl text-center border-solid border-2 rounded-lg' /> </div> 

                        <div className="text-red-500 text-xs relative top-[-25px]">{formik.errors.lastName}</div>

                    <div className='grid grid rows-2 relative bottom-[20px]'> <label className='text-left font-light text-blue-500 text-xl'> Email</label>
                        <input  name="email" onChange={formik.handleChange} value={formik.values.email} type="text" placeholder="Enter Email" className='text-center text-2xl text-center border-solid border-2 rounded-lg' /></div> 
                        <div className="text-red-500 text-xs relative top-[-15px]">  {formik.errors.email}</div>
                    <div className='grid grid rows-2 relative bottom-[10px]'> <label className='text-left font-light text-blue-500 text-xl'> Password</label>
                        <input type="password" onChange={formik.handleChange} value={formik.values.password} type="text" placeholder="Password" id="password" className='text-center text-2xl text-center border-solid border-2 rounded-lg' /> </div> 
                        <div className="text-red-500 text-xs "> {formik.errors.password}</div>
                    <div className='grid grid rows-2 relative bottom-[00px]'><label className='text-left font-light text-blue-500 text-xl'> Confirm Password</label>
                        <input type="password" onChange={formik.handleChange} value={formik.values.confirmPassword} type="text" placeholder="Confirm Password" id="confirmPassword" className='text-center text-2xl text-center border-solid border-2 rounded-lg' /> </div> 
                        <div className="text-red-500 text-xs relative top-[5px]"> {formik.errors.confirmPassword}</div>
                    <div className='bg-blue-500 absolute bottom-[0px] left-[270px] text-center mb-10 text-3xl hover:bg-blue-800 w-[180px] h-[55px] rounded-lg shadow-lg shadow-blue-300/100 text-white'> <button type="submit" classname="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">Submit </button>
                        <p className=''>
                            {processing && <FaSpinner icon="spinner" className="spinner animate-spin " size={35} />}
                        </p>
                    </div>

                </form>
                </div>
                </div>
            </div>
      

    )


}
export default Signup