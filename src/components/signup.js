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

        <div className='grid grid-rows-5  items-center text-center background_image '>
            <div className='box-border w-[600px] h-[500px] absolute top-[200px] left-[450px]  bg-white opacity-75 text-center shadow-2xl flex flex-col space-y-10 rounded-lg'> 
            <header className='text-center text-3xl text-black font-serif mt-6'>
                <h1> Sign Up</h1>
            </header>
            <div className='text-center flex flex-col space-y-15'>
                <form onSubmit={formik.handleSubmit}>
                    <div className=''> <label> First Name</label>
                        <input name="firstName" onChange={formik.handleChange} value={formik.values.firstName} type="text" placeholder="Enter First Name" className='text-center' />
                        <div className="text-red-500 text-xs">{formik.errors.firstName}</div></div>
                    <div> <label> Last Name</label>
                        <input name="lastName" onChange={formik.handleChange} value={formik.values.lastName} type="text" placeholder="Last Name" className='text-center' />
                        <div className="text-red-500 text-xs">{formik.errors.lastName}</div></div>
                    <div> <label> Email</label>
                        <input name="email" onChange={formik.handleChange} value={formik.values.email} type="text" placeholder="Enter Email" className='text-center' />
                        <div className="text-red-500 text-xs">  {formik.errors.email}</div> </div>
                    <div> <label> Password</label>
                        <input type="password" onChange={formik.handleChange} value={formik.values.password} type="text" placeholder="Password" id="password" className='text-center' />
                        <div className="text-red-500 text-xs"> {formik.errors.password}</div></div>
                    <div><label> Confirm Password</label>
                        <input type="password" onChange={formik.handleChange} value={formik.values.confirmPassword} type="text" placeholder="Confirm Password" id="confirmPassword" className='text-center' />
                        <div className="text-red-500 text-xs "> {formik.errors.confirmPassword}</div></div>
                    <div> <button type="submit" classname="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Submit </button>
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