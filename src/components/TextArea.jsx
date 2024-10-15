import React from 'react';
import PropTypes from 'prop-types';

/**
 * Textarea component is a reusable input element for multi-line text input.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.id - The unique identifier for the textarea element.
 * @param {string} props.label - The label text associated with the textarea.
 * @param {string} props.placeholder - The placeholder text displayed in the textarea.
 * @param {number} [props.rows=4] - The number of visible text lines (default is 4).
 * @param {string} [props.error] - The error message to display below the textarea.
 * @returns {JSX.Element} The Textarea component.
 */
const Textarea = ({ id, label, placeholder, rows = 4, error }) => (
  <div className="mb-4"> {/* Container for the textarea component */}
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
      {label} {/* Label for the textarea */}
    </label>
    <textarea
      id={id} // Unique identifier for the textarea element
      name={id} // Sets the name attribute to the same value as id
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
        error ? 'border-red-500' : '' // Conditional class for error state
      }`}
      placeholder={placeholder} // Placeholder text displayed in the textarea
      rows={rows} // Number of rows visible in the textarea
    ></textarea>
    {error && ( // Conditionally render error message if exists
      <p className="text-red-500 text-xs italic font-bold">{error}</p>
    )}
  </div>
);

export default Textarea;

// Prop types for the Textarea component
Textarea.propTypes = {
  id: PropTypes.string.isRequired, // Required prop for unique identifier
  label: PropTypes.string.isRequired, // Required prop for label text
  placeholder: PropTypes.string.isRequired, // Required prop for placeholder text
  rows: PropTypes.number, // Optional prop for number of visible rows
  error: PropTypes.string, // Optional prop for error message
};
