import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANSDmcguL6crzdK-DUUPjToFMM6f2S354",
  authDomain: "wechat-793d7.firebaseapp.com",
  projectId: "wechat-793d7",
  storageBucket: "wechat-793d7.firebasestorage.app",
  messagingSenderId: "696924137970",
  appId: "1:696924137970:web:da6546fcff1fefe4f1636b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('btnn').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementsByClassName('lds-ellipsis')[0].style.display = 'inline-block';
  // Store the entered name in localStorage
  var name = document.getElementById('usernameInput').value;
  localStorage.setItem('wechat_username', name);
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  if (!email || !password) {
    alert('Please enter both email and password.');
    document.getElementsByClassName('lds-ellipsis')[0].style.display = 'none';
    return;
  }
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert('Login successful!');
      console.log('Logged in:', userCredential.user);
      window.location.href = 'index1.html';
    })
    .catch((error) => {
      console.error('Error:', error);
      alert(error.message);
      document.getElementsByClassName('lds-ellipsis')[0].style.display = 'none';
    });
}); 
