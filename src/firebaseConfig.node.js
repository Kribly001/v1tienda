const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBiUlQC0Cd2vmBpUyBFEWKXw9FWdn6KTXg",
  authDomain: "techteno-1e8ad.firebaseapp.com",
  projectId: "techteno-1e8ad",
  storageBucket: "techteno-1e8ad.firebasestorage.app",
  messagingSenderId: "196223760508",
  appId: "1:196223760508:web:323307732fd7ff41ae71f9"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

module.exports = { db };