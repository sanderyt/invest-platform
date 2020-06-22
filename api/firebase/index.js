import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDl8sJJ2IDJHyzDa1JHh0ENMNoTulFSblk",
  authDomain: "platform-digitaal-vastgoed.firebaseapp.com",
  databaseURL: "https://platform-digitaal-vastgoed.firebaseio.com",
  projectId: "platform-digitaal-vastgoed",
  storageBucket: "platform-digitaal-vastgoed.appspot.com",
  messagingSenderId: "1094291929792",
  appId: "1:1094291929792:web:b677b1dafcf08874c54b25"
};

let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}
export default app;
