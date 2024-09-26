/**
 * @file Experience.jsx is the component that displays the experience page of the application, that requires an account to be accessed.
 * On this page, the user will be able to see the different experiences I had in the developement's world, and what I achieved.
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

// Importing Firebase configuration
import { auth } from '../../firebaseConfig';

// Importing styles
// import styles from './Experience.module.css';

/**
 * Experience is the component that displays the experience page of the application, that requires an account to be accessed.
 * 
 * @returns {JSX.Element} The Experience component.
 */
export const Experience = () => {
  // Hook to navigate to another page
  const navigate = useNavigate();

  // Check if the user is logged in. If not, redirect to the login page.
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        console.log("uid", uid);
      } else {
        console.log("user is logged out")
        navigate('/login');
      }
      });
  }, )

  return (
    <div>
      <p>EN CONSTRUCTION...</p>
    </div>
  );
};

export default Experience;
