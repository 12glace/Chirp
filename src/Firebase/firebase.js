import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC00APv6emzs1aEZ4b_eRToxTTWllsg87k",
    authDomain: "chirp-icssa.firebaseapp.com",
    projectId: "chirp-icssa",
    storageBucket: "chirp-icssa.appspot.com",
    messagingSenderId: "188350173174",
    appId: "1:188350173174:web:0a9dfd170e0948212d01d7",
    measurementId: "G-CQH4QB1HKD"
  };
  const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);