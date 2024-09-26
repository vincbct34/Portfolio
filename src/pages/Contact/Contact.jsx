/**
 * @file Contact.jsx is the component that displays the contact page of the application, that requires an account to be accessed.
 * On this page, the user will be able to see the different ways to contact me.
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

// Importing Firebase configuration
import { auth } from '../../firebaseConfig';

// Importing styles
// import styles from './Contact.module.css';

/**
 * Contact is the component that displays the contact page of the application, that requires an account to be accessed.
 * 
 * @returns {JSX.Element} The Contact component.
 */
export const Contact = () => {
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

export default Contact;
