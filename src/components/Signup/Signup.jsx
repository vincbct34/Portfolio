import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './Signup.module.css';
import signUpImage from './../../assets/images/signup.png';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation("global");

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
