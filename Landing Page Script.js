const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeBtns = document.querySelectorAll('.close');
const modals = document.querySelectorAll('.modal');

loginBtn.onclick = function() {
    loginModal.style.display = 'block';
}

registerBtn.onclick = function() {
    registerModal.style.display = 'block';
}

// Close the modal when clicking the close button
closeBtns.forEach(function(closeBtn) {
    closeBtn.onclick = function() {
        modals.forEach(function(modal) {
            modal.style.display = 'none';
        });
    }
});

// Close the modal when clicking outside of it
window.onclick = function(event) {
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}

const firebaseConfig = {
    apiKey: "AIzaSyAQgTvmpe9HZgbIT8YOZLYsvPjdygwkkWQ",
    authDomain: "pronetconnect-landing.firebaseapp.com",
    databaseURL: "https://pronetconnect-landing-default-rtdb.firebaseio.com",
    projectId: "pronetconnect-landing",
    storageBucket: "pronetconnect-landing.appspot.com",
    messagingSenderId: "206503149308",
    appId: "1:206503149308:web:70d389435b6816adcda179"
  };

   const app = firebase.initializeApp(firebaseConfig);
   const dbRef = firebase.database().ref();
   const detailsRef = dbRef.child('userdetails');
   detailsRef.on("child_added", function(snapshot, prevChildKey) { 
    var newPost = snapshot.val();
   });
   function send(){
    var email = document.getElementById("email").value; 
    var username = document.getElementById("username").value; 
    var password = document.getElementById("password").value; 
    var firstName = document.getElementById("firstName").value; 
    var lastName = document.getElementById("lastName").value; 

    detailsRef.push().set({
    email: email, 
    username: username, 
    password: password, 
    firstName: firstName,
    lastName: lastName
    });
   }