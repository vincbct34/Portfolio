import PropTypes from 'prop-types';

/**
 * @component BackgroundItem
 * 
 * The BackgroundItem component renders a circular background element 
 * that can be positioned anywhere on the screen. It supports animations 
 * via CSS classes and is designed to enhance the visual aesthetics of 
 * the application by creating layered background effects.
 * 
 * @param {Object} props - The properties object.
 * @param {number} props.top - The vertical position of the item in percentage.
 * @param {number} props.left - The horizontal position of the item in percentage.
 * @param {string} [props.animation] - Optional; a CSS class for animation effects.
 * 
 * @returns {JSX.Element} A styled div element representing a background item.
 */
export const BackgroundItem = ({ top, left, animation }) => {
  return (
    <div
      className={`fixed w-[60px] h-[60px] rounded-[20%] border-4 border-light-third dark:border-dark-third bg-transparent ${animation}`}
      style={{ top: `${top}%`, left: `${left}%` }} // Positioning the item based on props
    />
  );
};

// Prop types for BackgroundItem component
BackgroundItem.propTypes = {
  top: PropTypes.number.isRequired,   // Required prop for vertical position
  left: PropTypes.number.isRequired,  // Required prop for horizontal position
  animation: PropTypes.string,         // Optional prop for animation class
};
