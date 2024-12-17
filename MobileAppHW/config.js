import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJdUcGQ2sG2GWqX3kvX0bEYUaxXUvecug",
  authDomain: "mobile-app-hw-goit.firebaseapp.com",
  databaseURL: "<https://mobile-app-hw-goit.firebaseio.com>",
  projectId: "mobile-app-hw-goit",
  storageBucket: "mobile-app-hw-goit.appspot.com",
  // messagingSenderId: "686716805991",
  appId: "1:686716805991:android:b82fcc4207b1fb994d85c2",
  // measurementId: "G-measurement-id",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
