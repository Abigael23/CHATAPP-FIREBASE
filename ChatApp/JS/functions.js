let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
function signUpUser() {
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      alert("Signup is successful")
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
      // ..
    }); 
}