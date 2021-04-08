  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA7a4-OQpMtA1AubEg7w_ZCjQsdBa2I4ZE",
    authDomain: "kwitterapp1.firebaseapp.com",
    databaseURL: "https://kwitterapp1-default-rtdb.firebaseio.com",
    projectId: "kwitterapp1",
    storageBucket: "kwitterapp1.appspot.com",
    messagingSenderId: "196633051138",
    appId: "1:196633051138:web:837c228c7f117ad1ad671b",
    measurementId: "G-DBT7D59CD5"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });

  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });
    });
  }
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html"
}
