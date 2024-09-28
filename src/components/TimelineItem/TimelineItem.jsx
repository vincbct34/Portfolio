import PropTypes from 'prop-types';
import styles from './TimelineItem.module.css';

export const TimelineItem = ({ side, date, text, logo, logoAlt }) => {
  return (
    <>
      {side === "left" ? (
        <div className={styles.timelineItem}>
          <div className={styles.adjustDivs} />
          <div className={styles.timelineIllustration}>
            <div className={styles.timelineLine} />
            <div className={styles.timelinePoint}>
              {logo}
            </div>
          </div>
          <div className={styles.timelineContent}>
            <h3>{date}</h3>
            <p>{text}</p>
          </div>
        </div>
      ) : side === "right" ? (
        <div className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <h3>{date}</h3>
            <p>{text}</p>
          </div>
          <div className={styles.timelineIllustration}>
            <div className={styles.timelineLine} />
            <div className={styles.timelinePoint}>
              {logo}
            </div>
          </div>
          <div className={styles.adjustDivs} />
        </div>
      ) : (
        <>
          <div className={styles.timelineItem}>
            <div className={styles.adjustDivs} />
            <div className={styles.timelineIllustration}>
              <div className={styles.timelineLine}/>
              <div className={styles.timelinePoint}>
                {logo}
              </div>
            </div>
            <div className={styles.timelineContent}>
              <h3>{date}</h3>
              <p>{text}</p>
            </div>
          </div>
          <div className={styles.timelineLastLine}/>
        </>
      )}
    </>
  );
}

TimelineItem.propTypes = {
  side: PropTypes.oneOf(['left', 'right', 'last']).isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  logo: PropTypes.element.isRequired,
  logoAlt: PropTypes.string.isRequired,
};
