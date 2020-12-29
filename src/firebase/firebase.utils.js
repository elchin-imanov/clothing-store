import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBq4yyovA8gBGFl6JIFHNs3_mtwzMuKMPw",
    authDomain: "crwn-db-5e6ef.firebaseapp.com",
    projectId: "crwn-db-5e6ef",
    storageBucket: "crwn-db-5e6ef.appspot.com",
    messagingSenderId: "36289173172",
    appId: "1:36289173172:web:865bf5c192e5b0ca7969e1",
    measurementId: "G-2NMLW76F82"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc( `users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
