// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";
import { getDatabase, ref as dbRef, push } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6kNi6X1WbUAiPms4XCjD9Wr3IaMIbQb4",
    authDomain: "trung-672d8.firebaseapp.com",
    projectId: "trung-672d8",
    databaseURL: "https://trung-672d8-default-rtdb.firebaseio.com/",
    storageBucket: "trung-672d8.appspot.com",
    messagingSenderId: "333014231680",
    appId: "1:333014231680:web:6dd41ed30b072af3e09465"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const database = getDatabase(app);

document.getElementById('createGroupForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const groupName = document.getElementById('groupName').value;
    const groupDescription = document.getElementById('groupDescription').value;
    const groupPrivacy = document.querySelector('input[name="groupPrivacy"]:checked').value;
    const industry = Array.from(document.getElementById('industry').selectedOptions).map(o => o.value);
    const location = document.getElementById('location').value;
    const rules = document.getElementById('rules').value;
    const fileInput = document.getElementById('groupPicture');
    const file = fileInput.files[0];

    // Check if all required fields are filled and a picture is selected
    if (!groupName || !groupDescription || !groupPrivacy || industry.length === 0 || !location || !rules || !file) {
        alert("You have not completed the group creation fully.");
        return;
    }

    const storageReference = storageRef(storage, 'group_pictures/' + file.name);

    // Upload the file to Firebase Storage
    await uploadBytes(storageReference, file).then(async (snapshot) => {
        // Get the download URL
        const downloadURL = await getDownloadURL(snapshot.ref);

        // Form data with picture URL
        const formData = {
            groupName,
            groupDescription,
            groupPrivacy,
            groupPictureURL: downloadURL,
            industry,
            location,
            rules
        };

        // Save the data to Firebase Realtime Database
        const groupsRef = dbRef(database, 'groups');
        push(groupsRef, formData).then((dataRef) => {
          console.log('Group created successfully. Group ID:', dataRef.key);
            // Redirect to group page with the group's unique ID
            window.location.href = 'group-page.html?groupId=' + dataRef.key;
        }).catch((error) => {
          console.error('Error creating group: ', error);
        });
    
    });
});