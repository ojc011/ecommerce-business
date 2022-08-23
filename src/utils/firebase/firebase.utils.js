import { initializeApp } from 'firebase/app'; // Oject that allows us to attach this firebase app instance to the instance we have online
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDDQK9jCFG1-XEEENvjo41asB4weMtaRC0',
  authDomain: 'ecommerce-businessdb.firebaseapp.com',
  projectId: 'ecommerce-businessdb',
  storageBucket: 'ecommerce-businessdb.appspot.com',
  messagingSenderId: '1008095535887',
  appId: '1:1008095535887:web:59e3b1f0fdfe642fa8d47a',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};
