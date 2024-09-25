// Your web app's Firebase configuration
var firebaseConfig = {
  // webapp configuration
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Set database variable
  var database = firebase.database()
  
  function save() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var username = document.getElementById('username').value
    var bio = document.getElementById('bio').value
    var interest = document.getElementById('interest').value
  
    database.ref('users/' + username).set({
      email : email,
      password : password,
      username : username,
      bio : bio,
      interest : interest
    })
  
    alert('Saved')
    document.getElementById("form_container").reset()
  }
  
  function get() {
    var username = document.getElementById('username').value
  
    var user_ref = database.ref('users/' + username)
    user_ref.on('value', function(snapshot) {
    var data = snapshot.val()
  
    alert(data.email)
    document.getElementById("form_container").reset()
      
  
    })
  
  }
  
  function update() {
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
  
    var updates = {
      email : email,
      password : password
    }
  
    database.ref('users/' + username).update(updates)
  
    alert('updated')
    document.getElementById("form_container").reset()

  }
  
  function remove() {
    var username = document.getElementById('username').value
  
    database.ref('users/' + username).remove()
  
    alert('deleted')
    document.getElementById("form_container").reset()

  }