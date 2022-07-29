import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_Gm_C7l690VZTFt_bfkDguOtQ4G2knd0",
  authDomain: "hackathon-2bf4c.firebaseapp.com",
  projectId: "hackathon-2bf4c",
  storageBucket: "hackathon-2bf4c.appspot.com",
  messagingSenderId: "153098348651",
  appId: "1:153098348651:web:918288fdf58b0a7545292e",
  measurementId: "G-L7PSGDFHMK"
};

firebase.initializeApp(firebaseConfig);

//init firestore service
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const projectStorage = firebase.storage();
export {
    projectFirestore,
    timestamp,
    projectAuth,
    projectStorage
}