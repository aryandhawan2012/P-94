var firebaseConfig = {
    apiKey: "AIzaSyACCA_K4ZM63wcxHnx2KS2-V6G7134K914",
    authDomain: "project94-1316c.firebaseapp.com",
    projectId: "project94-1316c",
    storageBucket: "project94-1316c.appspot.com",
    messagingSenderId: "235092386435",
    appId: "1:235092386435:web:156ea3ffae58ed5fe171b6"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user _name").value;
     localStorage.setItem("user_name", user_name);
     window.location = "kwitter_room.html";
}