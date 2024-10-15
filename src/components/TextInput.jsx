import React from 'react';
import PropTypes from 'prop-types';

/**
 * TextInput component is a reusable input element for single-line text input.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.id - The unique identifier for the input element.
 * @param {string} props.label - The label text associated with the input.
 * @param {string} [props.type='text'] - The type of the input (default is 'text').
 * @param {string} props.placeholder - The placeholder text displayed in the input.
 * @param {string} [props.error] - The error message to display below the input.
 * @returns {JSX.Element} The TextInput component.
 */
const TextInput = ({ id, label, type = 'text', placeholder, error }) => (
  <div className="mb-4"> {/* Container for the input component */}
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
      {label} {/* Label for the input */}
    </label>
    <input
      type={type} // Type of input (e.g., text, email, password)
      id={id} // Unique identifier for the input element
      name={id} // Sets the name attribute to the same value as id
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
        error ? 'border-red-500' : '' // Conditional class for error state
      }`}
      placeholder={placeholder} // Placeholder text displayed in the input
    />
    {error && ( // Conditionally render error message if exists
      <p className="text-red-500 text-xs italic font-bold">{error}</p>
    )}
  </div>
);

export default TextInput;

// Prop types for the TextInput component
TextInput.propTypes = {
  id: PropTypes.string.isRequired, // Required prop for unique identifier
  label: PropTypes.string.isRequired, // Required prop for label text
  type: PropTypes.string, // Optional prop for input type
  placeholder: PropTypes.string.isRequired, // Required prop for placeholder text
  error: PropTypes.string, // Optional prop for error message
};