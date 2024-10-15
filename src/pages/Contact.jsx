import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import Textarea from '../components/TextArea';

const Contact = () => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Validate form data
    const newErrors = {};
    if (!data.firstName) newErrors.firstName = 'First name is required';
    if (!data.name) newErrors.name = 'Name is required';
    if (!data.email) newErrors.email = 'Email is required';
    if (!data.message) newErrors.message = 'Message is required';

    // Check if email is valid
    if (data.email && !/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Check if Name and First Name are valid
    if (data.name && !/^[a-zA-Z ]+$/.test(data.name)) {
      newErrors.name = 'Name is invalid';
    }
    if (data.firstName && !/^[a-zA-Z ]+$/.test(data.firstName)) {
      newErrors.firstName = 'First Name is invalid';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    // You can replace this with your form submission logic
    console.log('Form data:', data);
  };

  return (
    <section id="contact" className="w-full bg-light-first dark:bg-dark-first text-dark-first dark:text-light-first">
      <div className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <TextInput
            id="firstName"
            label="First Name"
            placeholder="Enter your first name"
            error={errors.firstName}
          />
          <TextInput
            id="name"
            label="Name"
            placeholder="Enter your name"
            error={errors.name}
          />
          <TextInput
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            error={errors.email}
          />
          <Textarea
            id="message"
            label="Message"
            placeholder="Enter your message"
            error={errors.message}
          />
          <div className="flex w-1/4 items-center justify-center transition-all duration-300 hover:drop-shadow-darkLogo dark:hover:drop-shadow-lightLogo">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;