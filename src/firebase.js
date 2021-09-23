import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBfySDf2PXRHTGCGjad97kqzgfAU81rS6M",
  authDomain: "project-2-c37a1.firebaseapp.com",
  projectId: "project-2-c37a1",
  storageBucket: "project-2-c37a1.appspot.com",
  messagingSenderId: "149972562927",
  appId: "1:149972562927:web:5ea339fd19ff8b70903c1a",
  measurementId: "G-018V9H1M82"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  const db = firebaseApp.firestore();

  export {auth, provider};
  export default db;