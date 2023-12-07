const firebaseConfig = {
  apiKey: "AIzaSyD6kNi6X1WbUAiPms4XCjD9Wr3IaMIbQb4",
  authDomain: "trung-672d8.firebaseapp.com",
  projectId: "trung-672d8",
  databaseURL: "https://trung-672d8-default-rtdb.firebaseio.com/",
  storageBucket: "trung-672d8.appspot.com",
  messagingSenderId: "333014231680",
  appId: "1:333014231680:web:6dd41ed30b072af3e09465"
};

const app = firebase.initializeApp(firebaseConfig); 
const dbRef = firebase.database().ref()

const detailsRef = dbRef.child('userdetails');
detailsRef.on("child_added", function(snapshot, prevChildKey) { 
var newPost = snapshot.val();
});
function send(){
var email = document.getElementById("email").value; 
var username = document.getElementById("username").value; 
var password = document.getElementById("password").value; 

if(email == "" || username == "" || password == ""){
  alert("Please enter a valid email, username, or password");
}
else{
detailsRef.push().set({
email: email, 
username: username, 
password: password, 
});
}

} 