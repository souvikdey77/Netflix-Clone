import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

// We need to somehow seed the database

const config = {
  apiKey: "AIzaSyAt2ARxE_KzA0QOrtT3WWlJjH1XwHQEAvw",
  authDomain: "netflix-clone-f5b9f.firebaseapp.com",
  projectId: "netflix-clone-f5b9f",
  storageBucket: "netflix-clone-f5b9f.appspot.com",
  messagingSenderId: "493841312720",
  appId: "1:493841312720:web:40e3c91fbf7948321767d5",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
