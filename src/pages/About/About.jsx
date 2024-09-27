/**
 * @file About.jsx is the component that displays the about page of the application, that requires an account to be accessed.
 * On this page, the user will be able to see my skills, but also what I like to do in my free time.
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

// import { useNavigate } from 'react-router-dom';
// import { useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";

// Importing Firebase configuration
// import { auth } from '../../firebaseConfig';

// Importing styles
import styles from './About.module.css';

// Importing components
import { InfiniteCarousel } from '../../components/InfiniteCarousel/InfiniteCarousel';

/**
 * About is the component that displays the about page of the application, that requires an account to be accessed.
 * 
 * @returns {JSX.Element} The About component.
 */
export const About = () => {
  // Hook to navigate to another page
  // const navigate = useNavigate();

  // Check if the user is logged in. If not, redirect to the login page.
  // useEffect(()=>{
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const uid = user.uid;

  //       console.log("uid", uid);
  //     } else {
  //       console.log("user is logged out")
  //       navigate('/login');
  //     }
  //     });
  // }, )

  return (
    <div className={styles.about}>
      <h1>Mes compétences</h1>
      <InfiniteCarousel />
    </div>
  );
};

export default About;
