/**
 * @file About.jsx is the component that displays the about page of the application, that requires an account to be accessed.
 * On this page, the user will be able to see my skills, but also what I like to do in my free time.
 * @autor Vincent Bichat <vincent260705@gmail.com>
 */

import { useTranslation } from 'react-i18next';
// import { useNavigate } from 'react-router-dom';
// import { onAuthStateChanged } from "firebase/auth";

// Importing Firebase configuration
// import { auth } from '../../firebaseConfig';

// Importing styles
import styles from './About.module.css';

// Importing images
import { TbCalendarTime } from "react-icons/tb";
import { FaBaby } from "react-icons/fa";
import { IoFootstepsOutline } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { GiDiploma } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { GrUserAdmin } from "react-icons/gr";
import { SiWebmoney } from "react-icons/si";
import { MdOutlineWork, MdWeb } from "react-icons/md";
import { ImRocket } from "react-icons/im";
import aboutLogo from '../assets/images/aboutIllustration.svg';
import CVPreview from '../assets/images/cvPreview.png';

// Importing components
import { TimelineItem } from '../components/TimelineItem';

// Importing PDF file
import cvPdf from '../assets/files/Cv.pdf';

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

  // Function to handle the change of the page
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }

  return (
    <div className={styles.about}>
      <div className={styles.timelineContainer}>
        <div className={styles.leftTimeline}>
          <div className={styles.startTimeline}>
            <TbCalendarTime size={40} />
          </div>
          <div className={styles.timeline}>
            <TimelineItem side={"left"} date={t("about.timelineDate.birth")} text={t("about.timeline.birth")} logo={<FaBaby size={25} />} logoAlt={"Baby"} />
            <TimelineItem side={"right"} date={t("about.timelineDate.firstSteps")} text={t("about.timeline.firstSteps")} logo={<IoFootstepsOutline size={25} />} logoAlt={"First Steps"} />
            <TimelineItem side={"left"} date={t("about.timelineDate.helpingMates")} text={t("about.timeline.helpingMates")} logo={<MdHomeWork size={25} />} logoAlt={"Homework"} />
            <TimelineItem side={"right"} date={t("about.timelineDate.graduation")} text={t("about.timeline.graduation")} logo={<GiDiploma size={25} />} logoAlt={"Degree"} />
            <TimelineItem side={"left"} date={t("about.timelineDate.epitech")} text={t("about.timeline.epitech")} logo={<FaComputer size={25} />} logoAlt={"Informatic"} />
            <TimelineItem side={"right"} date={t("about.timelineDate.passion")} text={t("about.timeline.passion")} logo={<PiStudentFill size={25} />} logoAlt={"Student"} />
            <TimelineItem side={"left"} date={t("about.timelineDate.onBoarding")} text={t("about.timeline.onBoarding")} logo={<GrUserAdmin size={25} />} logoAlt={"Admissions"} />
            <TimelineItem side={"right"} date={t("about.timelineDate.webDev")} text={t("about.timeline.webDev")} logo={<MdWeb size={25} />} logoAlt={"Web Development"} />
            <TimelineItem side={"left"} date={t("about.timelineDate.internship")} text={t("about.timeline.internship")} logo={<MdOutlineWork size={25} />} logoAlt={"Internship"} />
            <TimelineItem side={"right"} date={t("about.timelineDate.newPortfolio")} text={t("about.timeline.newPortfolio")} logo={<SiWebmoney size={25} />} logoAlt={"Portfolio"} />
            <TimelineItem side={"last"} date={t("about.timelineDate.future")} text={t("about.timeline.future")} logo={<ImRocket size={25} />} logoAlt={"Future"} />
          </div>
        </div>
        <div className={styles.description}>
          <h2>{t("about.descriptionTitle")}<span>💡</span></h2>
          <img src={aboutLogo} alt="About" />
          <p><span style={{fontSize: '5em'}}>{t("about.descriptionFirstLetter")}</span><span style={{fontWeight: '900', fontSize: '1.5em'}}>{t("about.descriptionBold")}</span>{t("about.description")}</p>
          <h3>{t("about.download.title")}</h3>
          <div className={styles.download}>
            <img src={CVPreview} alt="CV" />
            <a href={cvPdf} download>
              <button className={styles.downloadButton}>{t("about.download.cv")}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;