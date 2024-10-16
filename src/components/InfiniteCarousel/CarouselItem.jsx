import PropTypes from "prop-types";
import styles from "./InfiniteCarousel.module.css";

/**
 * CarouselItem component renders an image and a link with hover effects.
 * 
 * @param {Object} props - The properties object.
 * @param {string} props.imgUrl - The URL of the image to display.
 * @param {string} props.imgTitle - The title of the image.
 * @param {string} props.docLink - The URL of the document link.
 * @returns {JSX.Element} The rendered CarouselItem component.
 */
export default function CarouselItem({ imgUrl, imgTitle, docLink }) {
  // Handle mouse enter event, to pause the carousel
  const handleMouseEnter = () => {
    document.querySelector(`.${styles.track}`).classList.add(styles.paused);
  };

  // Handle mouse leave event, to resume the carousel
  const handleMouseLeave = () => {
    document.querySelector(`.${styles.track}`).classList.remove(styles.paused);
  };

  return (
    <div className={styles.card}>
      <img
        src={imgUrl}
        alt={imgTitle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <a
        href={docLink}
        className={styles.title}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {imgTitle}
      </a>
    </div>
  );
}

// Prop types for CarouselItem component
CarouselItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  imgTitle: PropTypes.string.isRequired,
  docLink: PropTypes.string.isRequired,
};