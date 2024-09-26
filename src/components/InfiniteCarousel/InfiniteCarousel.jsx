/**
 * @file InfiniteCarousel.jsx is the component that displays an infinite carousel of cards with different details.
 * This component is used in the About page of the application.
 * @returns {JSX.Element} The rendered InfiniteCarousel component.
 */

// Importing necessary data for the carousel
import { cardDetails } from "./CarouselConfig";
import CarouselItem from "./CarouselItem";

// Importing styles
import styles from "./InfiniteCarousel.module.css";

/**
 * InfiniteCarousel component renders an infinite carousel of cards with different details.
 * 
 * @returns {JSX.Element} The rendered InfiniteCarousel component.
 */
export const InfiniteCarousel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.track}>
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <CarouselItem
              key={detailKey}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
              docLink={cardDetails[detailKey].docLink}
            />
          );
        })}
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <CarouselItem
              key={`${detailKey}-duplicate`}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
              docLink={cardDetails[detailKey].docLink}
            />
          );
        })}
      </div>
    </div>
  );
}