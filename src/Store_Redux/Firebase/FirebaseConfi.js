import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAheNfAADhP1KJA7nRmjgccFubnb2OYPvg",
  authDomain: "food-delivery-app-7ac80.firebaseapp.com",
  databaseURL: "https://food-delivery-app-7ac80-default-rtdb.firebaseio.com",
  projectId: "food-delivery-app-7ac80",
  storageBucket: "food-delivery-app-7ac80.appspot.com",
  messagingSenderId: "912261331462",
  appId: "1:912261331462:web:fc4f1825080b9bb6fc6187"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signup(email, password) {
  console.log("email",email)
  console.log("password",password)
  return createUserWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}


export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}