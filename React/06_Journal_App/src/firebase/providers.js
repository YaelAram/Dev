import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleAuthProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try{
        const { user } = await signInWithPopup( FirebaseAuth, googleAuthProvider );
        const { displayName, email, photoURL, uid } = user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        };
    }
    catch( error ) {
        return {
            ok: false,
            message: error.message
        };
    }
};

export const customSignIn = async ( { displayName, email, password } ) => {
    try{
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;
        await updateProfile( FirebaseAuth.currentUser, { displayName } );

        return {
            ok: true,
            uid, displayName, email, photoURL
        };
    }
    catch( error ){
        return {
            ok: false,
            message: error.message
        };
    }
};

export const customLogIn = async ( email, password ) => {
    try{
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, displayName, photoURL } = resp.user;

        return {
            ok: true,
            uid, displayName, email, photoURL
        };
    }
    catch( error ){
        return {
            ok: false,
            message: error.message
        };
    }
};

export const logOutFirebase = async () => {
    return await FirebaseAuth.signOut();
};
