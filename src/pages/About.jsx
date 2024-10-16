/**
 * @file About.jsx - This component displays the About page of the application, requiring user authentication to access.
 * The page highlights key moments in the user's life and interests, allowing for a more personalized view.
 * 
 * @autor Vincent Bichat <vincent260705@gmail.com>
 */

import { useTranslation } from 'react-i18next';
// import { useNavigate } from 'react-router-dom';

// Importing icons for timeline events
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

// Importing the TimelineItem component used to build the timeline
import { TimelineItem } from '../components/TimelineItem';

/**
 * @component About
 * 
 * The About component displays a timeline of important events and achievements in the user's life. 
 * Each event is represented by an icon and text, with translation support.
 * 
 * @returns {JSX.Element} The rendered About component.
 */
const About = () => {
  // Translation hook to support multiple languages
  const { t } = useTranslation("global");

  return (
    <section 
      id="about" 
      className="w-full overflow-hidden bg-light-first dark:bg-dark-first text-dark-first dark:text-light-first"
    >
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          {/* Timeline Header Icon with Hover Effect */}
          <div className="flex flex-col justify-center items-center text-center gap-10">
            <div className="flex items-center justify-center w-20 h-20 mt-10 rounded-full border-4 border-dark-third group transition-all duration-300 transform hover:w-64 hover:h-20 cursor-default">
              <TbCalendarTime size={50} className="transition-transform duration-300 group-hover:translate-x-[-70px]" />
              <p className="absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Timeline</p>
            </div>
            {/* Timeline items displaying important life events */}
            <TimelineItem side="left" date={t("timelineDate.birth")} text={t("timeline.birth")} logo={<FaBaby size={35}/>} logoAlt={"Baby"} />
            <TimelineItem side="right" date={t("timelineDate.firstSteps")} text={t("timeline.firstSteps")} logo={<IoFootstepsOutline size={35} />} logoAlt={"First Steps"} />
            <TimelineItem side="left" date={t("timelineDate.helpingMates")} text={t("timeline.helpingMates")} logo={<MdHomeWork size={35} />} logoAlt={"Homework"} />
            <TimelineItem side="right" date={t("timelineDate.graduation")} text={t("timeline.graduation")} logo={<GiDiploma size={35} />} logoAlt={"Degree"} />
            <TimelineItem side="left" date={t("timelineDate.epitech")} text={t("timeline.epitech")} logo={<FaComputer size={35} />} logoAlt={"Informatic"} />
            <TimelineItem side="right" date={t("timelineDate.passion")} text={t("timeline.passion")} logo={<PiStudentFill size={35} />} logoAlt={"Student"} />
            <TimelineItem side="left" date={t("timelineDate.onBoarding")} text={t("timeline.onBoarding")} logo={<GrUserAdmin size={35} />} logoAlt={"Admissions"} />
            <TimelineItem side="right" date={t("timelineDate.webDev")} text={t("timeline.webDev")} logo={<MdWeb size={35} />} logoAlt={"Web Development"} />
            <TimelineItem side="left" date={t("timelineDate.internship")} text={t("timeline.internship")} logo={<MdOutlineWork size={35} />} logoAlt={"Internship"} />
            <TimelineItem side="right" date={t("timelineDate.newPortfolio")} text={t("timeline.newPortfolio")} logo={<SiWebmoney size={35} />} logoAlt={"Portfolio"} />
            <TimelineItem side="last" date={t("timelineDate.future")} text={t("timeline.future")} logo={<ImRocket size={35} />} logoAlt={"Future"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
