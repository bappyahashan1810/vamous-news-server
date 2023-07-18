// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgNoKXkK4_sa67KZLt0Pw3xRnRh8q2ukY",
    authDomain: "vamous-news-protal.firebaseapp.com",
    projectId: "vamous-news-protal",
    storageBucket: "vamous-news-protal.appspot.com",
    messagingSenderId: "314785289642",
    appId: "1:314785289642:web:9bf3d216f8a98ecf1447d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;