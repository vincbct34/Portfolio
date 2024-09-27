import PropTypes from 'prop-types';

import styles from './TimelineItem.module.css';

export const TimelineItem = ({ side, date, text, img, imgAlt }) => {

  return (
    <>
      {side === "left" ? (
        <div className={styles.timelineItemLeft}>
          <div className={styles.adjustDivs} />
          <div className={styles.timelineIllustration}>
            <div className={styles.timelineLine} />
            <div className={styles.timelinePoint}>
              <img src={img} alt={imgAlt} />
            </div>
          </div>
          <div className={styles.timelineContent}>
            <h3>{date}</h3>
            <p>{text}</p>
          </div>
        </div>
      ) : (
        <div className={styles.timelineItemRight}>
          <div className={styles.timelineContent}>
            <h3>{date}</h3>
            <p>{text}</p>
          </div>
          <div className={styles.timelineIllustration}>
            <div className={styles.timelineLine} />
            <div className={styles.timelinePoint} />
          </div>
          <div className={styles.adjustDivs} />
        </div>
      )}
    </>
  );
}

TimelineItem.propTypes = {
  side: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string,
};
