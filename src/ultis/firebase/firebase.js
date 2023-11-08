import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCga3kK8X8j8ye2GMIH6ptAQNWxu7VSJFs",
  authDomain: "hcmut-spss.firebaseapp.com",
  projectId: "hcmut-spss",
  storageBucket: "hcmut-spss.appspot.com",
  messagingSenderId: "402042921432",
  appId: "1:402042921432:web:6343ee3a221662e2bad2ad",
};

initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore();

// initialize a provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account", // Forces account selection even when one account is available (optional)
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const createUserFromAuth = async (userAuth, additionalInfo = {}) => {
  const newUserRef = doc(db, "users", userAuth.uid);
  const data = await getDoc(newUserRef);

  if (!data.exists()) {
    const { displayName, email } = userAuth;
    const date = new Date();
    try {
      await setDoc(newUserRef, {
        displayName,
        email,
        date,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(`Error creating user document: ${error}`);
    }
  }

  return newUserRef;
};

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};
export const signOutUser = async () => await signOut(auth);
