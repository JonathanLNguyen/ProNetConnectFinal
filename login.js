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

detailsRef.push().set({
email: email, 
username: username, 
password: password, 
});

} 

async function checkCredentials() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  try {
    const snapshot = await detailsRef.orderByChild('email').equalTo(email).once('value');
    let validCredentials = false;

    snapshot.forEach(function (childSnapshot) {
      var userData = childSnapshot.val();
      if (userData.password === password) {
        // Credentials are correct
        alert("Login successful");
        validCredentials = true;
        sessionStorage.setItem("username", document.getElementById("username").value);
        window.location.href = "Home Page.html";
      }
      else{
        alert("Login unsuccessful");
      }
    });

  return validCredentials;

  } catch (error) {
    console.error("Error fetching data:", error);
    return false;
  }
}

//     if (!validCredentials) {
//       // Incorrect credentials
//       console.log("Invalid login credentials");
//       // Handle invalid credentials (e.g., display an error message to the user)
//     }
//   } catch (error) {
//     // Handle any errors that occurred while fetching data
//     console.error("Error fetching data:", error);
//   }
// }