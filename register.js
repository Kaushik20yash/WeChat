import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

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

// ✅ Sign-Up (Register) User
document.getElementById('btnn1').addEventListener("click", function (event) {
    event.preventDefault();

    const email1 = document.getElementById('email1').value.trim();
    const password1 = document.getElementById('password1').value.trim();

    if (!email1 || !password1) {
        alert("Please enter both email and password.");
        return;
    }

    createUserWithEmailAndPassword(auth, email1, password1)
        .then((userCredential) => {
            alert("Account created successfully!");
            console.log("User:", userCredential.user);
            window.location.href = "mainProfile.html";  // Redirect to dashboard
        })
        .catch((error) => {
            console.error("Error:", error);
            alert(error.message);
        });
});

// ✅ Sign-In User
document.getElementById('btnn').addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login successful!");
            console.log("Logged in:", userCredential.user);
            window.location.href = "mainProfile.html";  // Redirect to dashboard
        })
        .catch((error) => {
            console.error("Error:", error);
            alert(error.message);
        });
});

// ✅ Check if user is already signed in
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is logged in:", user);
        window.location.href = "mainProfile.html";  // Redirect if already logged in
    }
});

//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   const submit = document.getElementById('btnn').value;
//   submit.addEventListener('click', function() {
//     event.preventDefault();
//   });