/**
 * @file Login.jsx is the component that displays the login page of the application.
 * On this page, the user will be able to log in to his account using Firebase authentication.
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Importing Firebase configuration
import { auth } from '../../firebaseConfig';
import styles from './Login.module.css';
import loginImage from './../../assets/images/login.png';

/**
 * Login is the component that displays the login page of the application.
 * 
 * @returns {JSX.Element} The Login component.
 */
const Login = () => {
  // Hook to navigate to another page
  const navigate = useNavigate();
  // Hook to use the translation module
  const { t } = useTranslation("global");

  // State variables to store the email and password of the user
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to log in the user
  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
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
      <form>
        <div>
          <label htmlFor="email-address">
            {t("login.emailLabel")}
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder={t("login.placeholderEmail")}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">
            {t("login.passwordLabel")}
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder={t("login.passwordPlaceholder")}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={onLogin}>
            {t("login.loginButton")}
          </button>
        </div>
        <p className={styles.signUp}>
          {t("login.alreadyHaveAccount")} {' '}
          <NavLink to="/signup" className={styles.navLink}>
            {t("login.signUpLink")}
          </NavLink>
        </p>
      </form>
      <img src={loginImage} alt='Illustration' className={styles.imageContainer} />
    </div>
  );
};

export default Login;
