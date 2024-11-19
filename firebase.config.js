import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVeaJAyMqqzJ86rJPNK4nbQJkIIhiSkKM",
  authDomain: "travel-company-6157e.firebaseapp.com",
  projectId: "travel-company-6157e",
  storageBucket: "travel-company-6157e.appspot.com", // Corrected domain
  messagingSenderId: "859195395502",
  appId: "1:859195395502:web:f117c475668211d6d30c3f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

  