/**
 * @file Signup.jsx is the component that displays the signup page of the application.
 * On this page, the user will be able to create an account to access the application, using Firebase authentication.
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Importing Firebase configuration
import { auth } from '../../firebaseConfig';

// Importing styles
import styles from './Signup.module.css';

// Importing images
import signUpImage from './../../assets/images/signup.png';

/**
 * SignUp is the component that displays the signup page of the application.
 * 
 * @returns {JSX.Element} The Signup component.
 */
const SignUp = () => {
  // Hook to navigate to another page
  const navigate = useNavigate();
  // Hook to use the translation module
  const { t } = useTranslation("global");

  // State variables to store the email and password of the user
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to sign up the user
  const onSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      navigate("/");
      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <img src={signUpImage} alt='Illustration' className={styles.imageContainer} />
      <form>
        <div>
          <label htmlFor="email-address">
            {t("signup.emailLabel")}
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder={t("signup.placeholderEmail")}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">
            {t("signup.passwordLabel")}
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder={t("signup.passwordPlaceholder")}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={onSignUp}>
            {t("signup.signUpButton")}
          </button>
        </div>
        <p className={styles.logIn}>
          {t("signup.alreadyHaveAccount")} {' '}
          <NavLink to="/login" className={styles.navLink}>
            {t("signup.logInLink")}
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
