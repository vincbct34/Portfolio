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
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-500 text-dark-first ${
        error ? 'border-red-500' : ''
      }`}
      placeholder={placeholder}
    />
    {error && (
      <p className="text-red-500 text-xs italic font-bold">{error}</p>
    )}
  </div>
);

export default TextInput;

// Prop types for the TextInput component
TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
};
