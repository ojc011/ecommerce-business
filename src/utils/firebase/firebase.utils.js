import { initializeApp } from 'firebase/app'; // Oject that allows us to attach this firebase app instance to the instance we have online
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

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
