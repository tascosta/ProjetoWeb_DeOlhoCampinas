// Initialize Firebase
var config = {
  apiKey: "AIzaSyBABLVhShD8zvz3eLgs_3WrZ21cLI6mjXw",
  authDomain: "de-olho-em-campinas.firebaseapp.com",
  databaseURL: "https://de-olho-em-campinas.firebaseio.com",
  projectId: "de-olho-em-campinas",
  storageBucket: "de-olho-em-campinas.appspot.com",
  messagingSenderId: "398327007885"
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});
