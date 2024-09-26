/**
 * @file firebaseConfig.jsx is the configuration file for Firebase, the method used for authentication.
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// The web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARgqsMVWEmwAsjYyfN_2DU-kTbYkSlfwM",
  authDomain: "portfolio-vb34.firebaseapp.com",
  projectId: "portfolio-vb34",
  storageBucket: "portfolio-vb34.appspot.com",
  messagingSenderId: "892345050574",
  appId: "1:892345050574:web:faadc9c84c7c03eaa4f79f",
  measurementId: "G-TT3E04T9BW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
