import { cardDetails } from "./CarouselConfig";
import CarouselItem from "./CarouselItem";
import styles from "./InfiniteCarousel.module.css";

/**
 * InfiniteCarousel component renders an infinite carousel of cards with different details.
 * 
 * @returns {JSX.Element} The rendered InfiniteCarousel component.
 */
export const InfiniteCarousel = ({title}) => {
  return (
    <>
      <h1>{title}</h1>
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
    </>
  );
}