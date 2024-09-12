import React from 'react';
import { useTranslation } from "react-i18next";

import './Home.css';

export const Home = () => {
  const { t } = useTranslation("global");

  return (
    <div className='Home'>
      <div className='Presentation'>
        <h2>{t("home.h2")} <span className="wave">👋</span></h2>
        <h1>{t("home.h1")}</h1>
        <h3>{t("home.h3")}</h3>
      </div>
      <div className='ProfileContainer'>
        <img src='/me.png' alt="Photo de Profil" className='ProfileImage' />
      </div>
    </div>
  );
};

export default Home;
