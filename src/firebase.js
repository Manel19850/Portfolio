import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCIxFTnr2mYRGuqJsJCBygNkXMFbHOirgw",
    authDomain: "portfolio-77de4.firebaseapp.com",
    projectId: "portfolio-77de4",
    storageBucket: "portfolio-77de4.appspot.com",
    messagingSenderId: "940661158169",
    appId: "1:940661158169:web:446bc7c1bda66c0d0dd588",
    measurementId: "G-KF8GZXV96P"
};

// Initialisation de l'application Firebase
const app = initializeApp(firebaseConfig);

// Initialisation de l'analytique Firebase
const auth = getAuth(app);

export { app, auth };
