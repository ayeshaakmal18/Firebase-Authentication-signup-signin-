  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
  import { getAuth , createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";



  const firebaseConfig = {
    apiKey: "AIzaSyARbKAft6uNpTzNWI6YlT1naHILRqtyTew",
    authDomain: "first-project-b5e61.firebaseapp.com",
    projectId: "first-project-b5e61",
    storageBucket: "first-project-b5e61.firebasestorage.app",
    messagingSenderId: "370416519791",
    appId: "1:370416519791:web:3f19df63428281a70d5b9a"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  let getbtn = document.getElementById("sbtn");

  if(getbtn){
  getbtn.addEventListener("click", function() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    const auth = getAuth();
createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  })
  }

  let getlbtn =document.getElementById("lbtn");
  
  if(getlbtn){
     getlbtn.addEventListener("click", ()=>{
      let lemail = document.getElementById("lemail");
    let lpassword = document.getElementById("lpassword");
    const auth = getAuth();
    signInWithEmailAndPassword(auth, lemail.value, lpassword.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    alert("sign in successful");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
  });
     })
  }