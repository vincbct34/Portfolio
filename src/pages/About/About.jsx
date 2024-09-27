/**
 * @file About.jsx is the component that displays the about page of the application, that requires an account to be accessed.
 * On this page, the user will be able to see my skills, but also what I like to do in my free time.
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

import { useTranslation } from 'react-i18next';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";

// Importing Firebase configuration
// import { auth } from '../../firebaseConfig';

// Importing styles
import styles from './About.module.css';

// Importing images
import { TbCalendarTime } from "react-icons/tb";
import teatPng from './../../assets/images/teat.png';
import stepPng from './../../assets/images/firststep.png';
import homeworkPng from './../../assets/images/homework.png';
import degreePng from './../../assets/images/degree.png';
import informaticPng from './../../assets/images/informatic.png';
import studentPng from './../../assets/images/student.png';
import admissionsPng from './../../assets/images/admissions.png';
import webPng from './../../assets/images/web.png';
import internshipPng from './../../assets/images/internship.png';
import portfolioPng from './../../assets/images/portfolio.png';

// Importing components
import { TimelineItem } from '../../components/TimelineItem/TimelineItem';

/**
 * About is the component that displays the about page of the application, that requires an account to be accessed.
 * 
 * @returns {JSX.Element} The About component.
 */
export const About = () => {
  // Hook to navigate to another page
  // const navigate = useNavigate();

  // Hook to use the translation functions
  const { t } = useTranslation("global");

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
      <div className={styles.timelineContainer}>
        <div className={styles.leftTimeline}>
          <div className={styles.startTimeline}>
            <TbCalendarTime size={40} />
          </div>
          <div className={styles.timeline}>
            <TimelineItem side={"left"} date={"26/07/2005"} text={t("about.timeline.birth")} img={teatPng} imgAlt={"Teat"} />
            <TimelineItem side={"right"} date={"2018 ~ 2019"} text={t("about.timeline.firstSteps")} img={stepPng} imgAlt={"First Steps"} />
            <TimelineItem side={"left"} date={"2019 -> 2022"} text={t("about.timeline.helpingMates")} img={homeworkPng} imgAlt={"Homework"} />
            <TimelineItem side={"right"} date={"Début 2022"} text={t("about.timeline.graduation")} img={degreePng} imgAlt={"Degree"} />
            <TimelineItem side={"left"} date={"Octobre 2022"} text={t("about.timeline.epitech")} img={informaticPng} imgAlt={"Informatic"} />
            <TimelineItem side={"right"} date={"2023"} text={t("about.timeline.passion")} img={studentPng} imgAlt={"Student"} />
            <TimelineItem side={"left"} date={"Milieu 2023"} text={t("about.timeline.onBoarding")} img={admissionsPng} imgAlt={"Admissions"} />
            <TimelineItem side={"right"} date={"Début 2024"} text={t("about.timeline.webDev")} img={webPng} imgAlt={"Web Development"} />
            <TimelineItem side={"left"} date={"Juillet 2024"} text={t("about.timeline.internship")} img={internshipPng} imgAlt={"Internship"} />
            <TimelineItem side={"right"} date={"Fin 2024"} text={t("about.timeline.newPortfolio")} img={portfolioPng} imgAlt={"Portfolio"} />
          </div>
        </div>
        <div className={styles.description}>
          <h2>{t("about.descriptionTitle")}</h2>
          <p>{t("about.description")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
