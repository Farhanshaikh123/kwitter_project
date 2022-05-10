// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAsRi6XkO5s6M8W5my9MRsRaI_1VtfGknc",
      authDomain: "classtest-146d1.firebaseapp.com",
      projectId: "classtest-146d1",
      storageBucket: "classtest-146d1.appspot.com",
      messagingSenderId: "7397482440",
      appId: "1:7397482440:web:c0b3e02bd844c53f33aafd"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
 var user_name=localStorage.getItem("user_name")
 document.getElementById("user_name").innerHTML = "welcome "+ user_name +"!"

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("");
      row = "<div class=room_name id ="+Room_names+"onclick= 'redrictToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();3

function addRoom()
{
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
         purpose:"adding room name"
   });

   localStorage.setItem("room_name", room_name);
   window.location ="kwitter_page.html";
}