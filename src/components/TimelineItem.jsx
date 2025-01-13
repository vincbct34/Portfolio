import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

/**
 * TimelineItem component represents a single item in a timeline.
 * It displays a logo, date, and text, and can toggle the visibility of its details.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {'left' | 'right' | 'last'} props.side - The side where the item is positioned.
 * @param {string} props.date - The date associated with the timeline item.
 * @param {string} props.text - The description text for the timeline item.
 * @param {React.Element} props.logo - The logo/icon element to be displayed.
 * @returns {JSX.Element} The TimelineItem component.
 */
export const TimelineItem = ({ side, date, text, logo }) => {
  const [isClicked, setIsClicked] = useState(false); // State to manage click toggle
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // State to store the window width
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the view once
    threshold: 1, // Percentage of visibility to trigger
  });

  /**
   * Updates the windowWidth state whenever the window is resized.
   */
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize); // Add resize event listener

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up on unmount
    };
  }, []);

  /**
   * Toggles the visibility state of the timeline item when clicked.
   */
  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <>
      {windowWidth < 768 ? ( // Render mobile view if the width is less than 768px
        <div ref={ref} className="flex flex-col w-full justify-center items-center mt-10">
          {/* Clickable logo for mobile view */}
          <div
            onClick={handleClick}
            className={`flex flex-col justify-center items-center rounded-full border-4 border-dark-third transition-all duration-300 ${
              isClicked ? 'mb-4 w-20 h-20' : 'w-14 h-14'
            }`}
          >
            {/* Logo with inView effect */}
            <div
              className={`flex justify-center items-center transition-opacity duration-300 ${
                inView ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {logo}
            </div>
          </div>
          {/* Timeline details that appear on logo click */}
          <div
            className={`flex flex-col w-11/12 items-center text-center transition-all duration-300 ${
              isClicked ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-xs">{date}</p>
            <p className="text-lg">{text}</p>
          </div>
        </div>
      ) : ( // Render desktop view if the width is 768px or more
        <>
          {side === 'left' ? ( // Left side layout
            <div ref={ref} className="flex flex-row w-full justify-start items-center">
              <div className="flex flex-col w-1/6 justify-center items-center gap-2">
                <div
                  className={`flex w-20 h-20 justify-center items-center rounded-full border-4 border-dark-third transition-opacity duration-300 ${
                    inView ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {logo}
                </div>
                <p className="text-xs">{date}</p>
              </div>
              <div
                className={`flex flex-col w-5/6 -ml-10 items-start transition-all duration-300 ${
                  inView ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="text-lg text-left">{text}</p>
              </div>
            </div>
          ) : side === 'right' ? ( // Right side layout
            <div ref={ref} className="flex flex-row w-full justify-end items-center">
              <div
                className={`flex flex-col w-5/6 -mr-10 items-end transition-all duration-300 ${
                  inView ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="text-lg text-right">{text}</p>
              </div>
              <div className="flex flex-col w-1/6 justify-center items-center gap-2">
                <div
                  className={`flex w-20 h-20 justify-center items-center rounded-full border-4 border-dark-third transition-opacity duration-300 ${
                    inView ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {logo}
                </div>
                <p className="text-xs">{date}</p>
              </div>
            </div>
          ) : ( // Last item layout (centered)
            <div ref={ref} className="flex flex-row w-full justify-center items-center">
              <div className="flex flex-col w-1/6 justify-center items-center gap-2">
                <div
                  className={`flex w-20 h-20 justify-center items-center rounded-full border-4 border-dark-third transition-opacity duration-300 ${
                    inView ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {logo}
                </div>
                <p className="text-xs">{date}</p>
              </div>
              <div
                className={`flex flex-col w-5/6 -ml-2 items-start transition-all duration-300 ${
                  inView ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="text-lg text-left">{text}</p>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

// PropTypes validation for component props
TimelineItem.propTypes = {
  side: PropTypes.oneOf(['left', 'right', 'last']).isRequired, // Side prop must be one of these values
  date: PropTypes.string.isRequired, // Date must be a string
  text: PropTypes.string.isRequired, // Text must be a string
  logo: PropTypes.element.isRequired, // Logo must be a React element
};
