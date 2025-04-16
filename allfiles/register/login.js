// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASZAUf2xP-IK7XRddXpRwocnWrmX9mhkg",
    authDomain: "bibleapp-10f92.firebaseapp.com",
    projectId: "bibleapp-10f92",
    storageBucket: "bibleapp-10f92.firebasestorage.app",
    messagingSenderId: "546379624915",
    appId: "1:546379624915:web:4f7cee276d63f793d4ff26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);




const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault()
    const email= document.getElementById('email').value;
const password= document.getElementById('password').value; 

signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("logging in")
            window.location.href = "index.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("errorMessage")
            // ..
        });

}) 


