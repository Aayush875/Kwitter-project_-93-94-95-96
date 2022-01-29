var firebaseConfig = {
      apiKey: "AIzaSyClY3fwe7GeeMT8iH0wlpLfCdG0nsEHWyQ",
      authDomain: "kwitter-4e311.firebaseapp.com",
      databaseURL: "https://kwitter-4e311-default-rtdb.firebaseio.com",
      projectId: "kwitter-4e311",
      storageBucket: "kwitter-4e311.appspot.com",
      messagingSenderId: "309001941886",
      appId: "1:309001941886:web:f2c4478009ca43516fb92f"
    };

    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name")
    room_name=localStorage.getItem("room_name")
     
    function send() {
          msg=document.getElementById("msg").value
          firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0  
          })
          document.getElementById("msg").value=""
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
name=message_data["name"]
message=message_data["message"]
like=message_data["like"]
namewithtag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>"
messagewithtag="<h4 class='message_h4'>"+message+"</h4>"
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>"
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'> like : "+like+"</span></button><hr>"

row=namewithtag+messagewithtag+like_button+spanwithtag
document.getElementById("output").innerHTML +=row

//End code
      } });  }); }
getData();

function updatelike(message_id) {
      button_id=message_id
      likes=document.getElementById(button_id).value
      updated_likes=Number(likes)+1

      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      })
}
function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"

}