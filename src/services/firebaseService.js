import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const app = initializeApp ({
    apiKey: "AIzaSyBEIxH2FAp5AFQsgrJL3BEKJmKnEyrbM1U",
    authDomain: "devtorocketg20.firebaseapp.com",
    databaseURL: "https://devtorocketg20-default-rtdb.firebaseio.com",
    projectId: "devtorocketg20",
    storageBucket: "devtorocketg20.appspot.com",
    messagingSenderId: "922740208168",
    appId: "1:922740208168:web:e073479da552b0f27ebb1d"
});
 
// Firebase storage reference
const storage = getStorage(app);
export default storage;