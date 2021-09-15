import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyBDRnms5YgK8GMoX1X_ExOhGuzyuSZwV-E",
  authDomain: "whatsapp-clone-179f0.firebaseapp.com",
  projectId: "whatsapp-clone-179f0",
  storageBucket: "whatsapp-clone-179f0.appspot.com",
  messagingSenderId: "630613068847",
  appId: "1:630613068847:web:b4b19dac17a5147b5c8ada",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); //db will access direstore instance of our app IT BASICALLY GETS OUR DATABASE
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
