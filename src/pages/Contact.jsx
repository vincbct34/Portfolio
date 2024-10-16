/**
 * @file Contact.jsx - This component handles user inquiries via a contact form.
 * The form allows users to submit their contact information and message, which is then sent via email.
 * The component includes form validation, loading state management, and error handling.
 * 
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

// Importing the EmailJS library for sending emails
import emailjs from '@emailjs/browser';

// Importing the SweetAlert2 library for notifications
import Swal from 'sweetalert2';

// Importing the form components
import TextInput from '../components/TextInput';
import Textarea from '../components/TextArea';

/**
 * Contact component handles user inquiries via a contact form.
 *
 * @returns {JSX.Element} The Contact component.
 */
const Contact = () => {
  const { t } = useTranslation('global');
  const form = useRef(); // Ref to the form element
  const [errors, setErrors] = useState({}); // State to hold form validation errors
  const [loading, setLoading] = useState(false); // State for loading indicator

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries()); // Convert form data to an object

    // Validate form data
    const newErrors = {};
    if (!data.firstName) newErrors.firstName = 'First name is required';
    if (!data.lastName) newErrors.lastName = 'Name is required';
    if (!data.email) newErrors.email = 'Email is required';
    if (!data.message) newErrors.message = 'Message is required';

    if (data.email && !/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Email is invalid'; // Validate email format
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set errors if validation fails
      return;
    }

    setErrors({}); // Clear errors if validation passes

    // Set loading to true
    setLoading(true);

    // EmailJS initialization
    emailjs.init({
      publicKey: 'VTfoqxdVuYWOIaC4A',
      // Do not allow headless browsers
      blockHeadless: true,
      blockList: {
        // Block the suspended emails
        list: [''],
        // The variable contains the email address
        watchVariable: 'userEmail',
      },
      limitRate: {
        // Set the limit rate for the application
        id: 'app',
        // Allow 1 request per 10 seconds
        throttle: 10000,
      },
    });

    const templateParams = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      message: data.message,
    };

    // Send email
    await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate waiting for 2 seconds
    
    emailjs.send('service_htlja13', 'template_zigf4ar', templateParams)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          Swal.fire({
            icon: 'success',
            title: t('contact.successTitle'),
            text: t('contact.success'),
          });
          form.current.reset(); // Reset form after successful submission
        },
        (error) => {
          console.log('FAILED...', error);
          Swal.fire({
            icon: 'error',
            title: t('contact.errorTitle'),
            text: t('contact.error'),
          });
        }
      )
      .finally(() => {
        // Reset loading state after email is sent
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="w-full bg-light-first dark:bg-dark-first text-dark-first dark:text-light-first py-20">
      <div className="flex w-full flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">{t('contact.title')}</h2>
        <form ref={form} onSubmit={handleSubmit} className="flex flex-col w-3/4 md:w-1/2">
          <TextInput
            id="firstName"
            label={t('contact.input.firstName')}
            placeholder={t('contact.placeholder.firstName')}
            error={errors.firstName}
          />
          <TextInput
            id="lastName"
            label={t('contact.input.lastName')}
            placeholder={t('contact.placeholder.lastName')}
            error={errors.lastName}
          />
          <TextInput
            id="email"
            label="Email"
            type="email"
            placeholder={t('contact.placeholder.email')}
            error={errors.email}
          />
          <Textarea
            id="message"
            label="Message"
            placeholder={t('contact.placeholder.message')}
            error={errors.message}
          />
          {!loading ? (
            <button
              type="submit"
              className="flex justify-center items-center text-lg bg-light-first dark:bg-dark-first before:absolute before:w-full before:transition-all before:duration-700 before:-left-full before:hover:left-0 before:rounded-full before:bg-dark-first dark:before:bg-light-first hover:text-light-first hover:dark:text-dark-first before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full"
              disabled={loading} // Disable button while loading
            >
              {t('contact.button')}
            </button>
          ) : (
            <div class="flex flex-row justify-center items-center gap-2">
              <div class="w-4 h-4 rounded-full bg-dark-first dark:bg-light-first animate-bounce [animation-delay:.7s]"></div>
              <div class="w-4 h-4 rounded-full bg-dark-first dark:bg-light-first animate-bounce [animation-delay:.3s]"></div>
              <div class="w-4 h-4 rounded-full bg-dark-first dark:bg-light-first animate-bounce [animation-delay:.7s]"></div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
