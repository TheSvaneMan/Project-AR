// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { initializeAuth, indexedDBLocalPersistence } from '@firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALetSsBrqgV7jvWfThKQuajXMrHZfl_as",
  authDomain: "project-ar-9bac5.firebaseapp.com",
  databaseURL: "https://project-ar-9bac5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "project-ar-9bac5",
  storageBucket: "project-ar-9bac5.appspot.com",
  messagingSenderId: "1017480582208",
  appId: "1:1017480582208:web:6244a3f3bcfdf13f33bba5",
  measurementId: "G-V86NGMWVH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize auth
export const auth = initializeAuth(app, {
    persistence: indexedDBLocalPersistence
});
// Database reference
export const database = getDatabase(app);
// Reference to posts in Realtime DB
export const postsRef = ref(database, "posts");
// Reference to users in Realtime DB
export const usersRef = ref(database, "users");
// Get reference to specific post using post id
export function getPostRef(postId) {
    return ref(database, "posts/" + postId);
}
// Get reference to specific user using user id
export function getUserRef(userId) {
    return ref(database, "users/" + userId);
}

// Reference to the storage service
export const storage = getStorage(app);