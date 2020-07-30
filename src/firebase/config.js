import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBZq4kRG8nQAAMWfONYCkM28XOgesRzmxM",
    authDomain: "fructis-gallery.firebaseapp.com",
    databaseURL: "https://fructis-gallery.firebaseio.com",
    projectId: "fructis-gallery",
    storageBucket: "fructis-gallery.appspot.com",
    messagingSenderId: "628063699984",
    appId: "1:628063699984:web:106888f8ab230f31e8b695"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFireStorage = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export {
      projectFireStorage,
      projectStorage,
      timeStamp
  }
