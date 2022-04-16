import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import store from "../store";

export const signup = ({ firstName, lastName, email, password, phone }, onSuccess, onFailure) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //Signed in 
            const user = userCredential.user;
            if (onSuccess) {
                onSuccess();
                updateProfile(auth.currentUser, {
                    displayName: firstName + " " + lastName,
                })
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (onFailure) {
                onFailure(error.message);
            }

        });
}
export const signIn = ({ email, password }, onSuccess, onFailure) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //Signed in 
            const user = userCredential.user;
            console.log("userSignedInSuccessfully")
    store.user.set({ fullName: user.displayName, email: user.email, emailVerified: user.emailVerified, isAuthenticated: true, uid: user.uid})
            if (onSuccess) {
                onSuccess();
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("userDidNotSignInSuccessfully")
            if (onFailure) {
                onFailure(error.message);
            }
        });
}

export const resetPassword = ({email}, onSuccess, onFailure) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
        .then(() => {
            //Password reset email sent! 
            if (onSuccess) {
                onSuccess();


            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (onFailure) {
                onFailure(error.message);
            }
        });
}