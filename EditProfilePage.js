function updateProfile() {
    
    preventDefault();
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
    

    var profilePictureUrl = document.getElementById('profilePictureUrl').value;
    var userName = document.getElementById('userName').value;
    var userOccupation = document.getElementById('userOccupation').value;
    var aboutText = document.getElementById('aboutText').value;
    var skillsText = document.getElementById('skillsText').value;

// Collecting Experience Entries
    var experienceEntries = [];
    document.querySelectorAll('.experience-entry').forEach(entry => {
        var jobTitle = entry.querySelector('[name="jobTitle[]"]').value;
        var jobYear = entry.querySelector('[name="jobYear[]"]').value;
        experienceEntries.push({ jobTitle, jobYear });
    });

    // Collecting License Entries
    var licenseEntries = [];
    document.querySelectorAll('.license-entry').forEach(entry => {
        var certName = entry.querySelector('[name="certName[]"]').value;
        var certInstitution = entry.querySelector('[name="certInstitution[]"]').value;
        licenseEntries.push({ certName, certInstitution });
    });

    // Console logging 
    console.log('Profile Picture URL:', profilePictureUrl);
    console.log('Name:', userName);
    console.log('Occupation:', userOccupation);
    console.log('About:', aboutText);
    console.log('Skills:', skillsText);
    console.log('Experience:', experienceEntries);
    console.log('Licenses:', licenseEntries);
}
