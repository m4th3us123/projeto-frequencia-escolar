import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA0OqxrdBohpicMDzRnYOHIAmO9NPXOB64",
  authDomain: "frequencia-escolar-a3fc8.firebaseapp.com",
  projectId: "frequencia-escolar-a3fc8",
  storageBucket: "frequencia-escolar-a3fc8.appspot.com",
  messagingSenderId: "808080593314",
  appId: "1:808080593314:web:e9bc8d7e980f91cabda2fb"
}
//initialize your database
firebase.initializeApp(firebaseConfig);

  export default firebase.database()
 

  