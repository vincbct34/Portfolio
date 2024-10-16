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
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
      {label}
    </label>
    <textarea
      id={id}
      name={id}
      className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline no-scrollbar placeholder-gray-500 text-dark-first ${
        error ? 'border-red-500' : ''
      }`}
      placeholder={placeholder}
      rows={rows}
    ></textarea>
    {error && (
      <p className="text-red-500 text-xs italic font-bold">{error}</p>
    )}
  </div>
);

export default Textarea;

// Prop types for the Textarea component
Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  rows: PropTypes.number,
  error: PropTypes.string,
};
