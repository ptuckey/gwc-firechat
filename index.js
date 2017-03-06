function initFirebase() {
  var config = {
    apiKey: "AIzaSyAYHp_D12d8OZq3iH7K9qH1ENBw_IWTz4s",
    authDomain: "gwc-excelsior.firebaseapp.com",
    databaseURL: "https://gwc-excelsior.firebaseio.com",
    storageBucket: "gwc-excelsior.appspot.com",
    messagingSenderId: "695197070968"
  };
  firebase.initializeApp(config);
}

function initChat(user, displayName) {
    var chatRef = firebase.database().ref("firechat");
    var chat = new FirechatUI(chatRef, document.getElementById("firechat-wrapper"));
    chat.setUser(user.uid, displayName);
}

function onLoginSubmit() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
}
