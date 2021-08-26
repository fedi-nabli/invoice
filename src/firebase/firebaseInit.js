import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAiDOpbyUqqh39pNd6pzNYN0ABa2bhtM98",
  authDomain: "invoice-81ad8.firebaseapp.com",
  projectId: "invoice-81ad8",
  storageBucket: "invoice-81ad8.appspot.com",
  messagingSenderId: "1069219121152",
  appId: "1:1069219121152:web:1cd9c405ea83fd775b30e5",
  measurementId: "G-SN3LVGDG1M"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()