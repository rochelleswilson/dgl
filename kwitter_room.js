
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAqJF4yryr06S5FZ273zXh97dCZHTnkG9U",
      authDomain: "covid-bxwx.firebaseapp.com",
      databaseURL: "https://covid-bxwx-default-rtdb.firebaseio.com",
      projectId: "covid-bxwx",
      storageBucket: "covid-bxwx.appspot.com",
      messagingSenderId: "460303889426",
      appId: "1:460303889426:web:9b95fa18e418289c11d4cb",
      measurementId: "G-E3XK729PMS"
    };
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
