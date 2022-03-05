import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";

export const signup = ({firstName, lastName, email, password, phone}, onSuccess, onFailure) => {
const auth= getAuth (); 
 createUserWithEmailAndPassword(auth, email, password)
 .then ((userCredential) => { 
     //Signed in 
     const user = userCredential.user;
     if (onSuccess){
        onSuccess();
    }
 })
 .catch ((error) => { 
     const errorCode = error.code; 
     const errorMessage = error.message; 
    if (onFailure){ 
        onFailure(error.message);
    }
     
 });
}
export const signIn=({email,password}, onSuccess, onFailure)=>{
    const auth = getAuth ();
    signInWithEmailAndPassword(auth, email, password)
    .then ((userCredential) => { 
        //Signed in 
        const user = userCredential.user;
        console.log("userSignedInSuccessfully")
        if (onSuccess){
            onSuccess();
        }
    })
    .catch ((error) => { 
        const errorCode = error.code; 
        const errorMessage = error.message; 
        console.log("userDidNotSignInSuccessfully")
        if (onFailure){ 
            onFailure(error.message);
        } 
    });
}

export const resetPassword= (email, onSuccess, onFailure)=> { 
    const auth= getAuth(); 
    sendPasswordResetEmail(auth,email)
    .then(()=> { 
        //Password reset email sent! 
        if (onSuccess){ 
            onSuccess(); 
        

    }
    })
    .catch((error) => {
        const errorCode = error.code; 
        const errorMessage = error.message; 
        if (onFailure){ 
            onFailure(error.message);
}
});
}