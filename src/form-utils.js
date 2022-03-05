import * as Yup from "yup"; 




export const signupvalidationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email("Email is invalid"), 
    firstName: Yup.string().required('First Name is required'), 
    lastName: Yup.string().required("Last name is required"), 
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string ().oneOf([Yup.ref ('password')], 'Passwords must match')

}); 
export const loginvalidationSchema = Yup.object().shape({ 
    email: Yup.string().required('Email is required').email("Email is invalid"),
    password: Yup.string().required("Password is required"),





});

