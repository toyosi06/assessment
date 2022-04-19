import * as Yup from "yup"; 




export const signupvalidationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email("Email is invalid"), 
    firstName: Yup.string().required('First Name is required'), 
    lastName: Yup.string().required("Last name is required"), 
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().required("Please Confirm your Password"),

}); 
export const loginvalidationSchema = Yup.object().shape({ 
    email: Yup.string().required('Email is required').email("Email is invalid"),
    password: Yup.string().required("Password is required"),
});
export const forgotpasswordvalidationSchema = Yup.object().shape({ 
    email: Yup.string().required('Email is required').email("Email is invalid"),
});

export const questionsvalidationSchema = Yup.object().shape({
    question: Yup.string().required('This Question is Required'), 
    }); 