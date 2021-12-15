
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  //apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  apiKey: 'AIzaSyD9jELbfxk_BgNqoqj6VynRDTuI9Vmpv04',
  //authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  authDomain:'tms-react-7a609.firebaseapp.com',
  //databaseURL : process.env.REACT_APP_FIREBASE_DATA_BASE_URL,
  //projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  projectId:'tms-react-7a609',
  //storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  storageBucket:'tms-react-7a609.appspot.com',
  //messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
  messagingSenderId:647883156594,
  //appId: process.env.REACT_APP_FIREBASE_APP_ID,
  appId:'1:647883156594:web:8fd8aec7484d9cb4ad26eb'
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
