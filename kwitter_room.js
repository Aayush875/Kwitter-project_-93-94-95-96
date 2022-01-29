
var firebaseConfig = {
      apiKey: "AIzaSyClY3fwe7GeeMT8iH0wlpLfCdG0nsEHWyQ",
      authDomain: "kwitter-4e311.firebaseapp.com",
      databaseURL: "https://kwitter-4e311-default-rtdb.firebaseio.com",
      projectId: "kwitter-4e311",
      storageBucket: "kwitter-4e311.appspot.com",
      messagingSenderId: "309001941886",
      appId: "1:309001941886:web:f2c4478009ca43516fb92f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML= "welcome "+ user_name + "!"

    function addroom() {
          room_name=document.getElementById("room_name").value
          firebase.database().ref("/").child(room_name).update({
                purpose:"addingroomname"
          })
          localStorage.setItem("room_name",room_name)
          window.location="kwitter_page.html"
    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div> <hr>"
      document.getElementById("output").innerHTML +=row

      //End code
      });});}
getData();

function redirectToRoomName(name) {
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}

function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}