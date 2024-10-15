import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import TextInput from '../components/TextInput';
import Textarea from '../components/TextArea';
import { gapi } from 'gapi-script';

const CLIENT_ID = '78271924746-s1gddsbod0u1md3ji7bd6678g4sda88g.apps.googleusercontent.com';
const API_KEY = 'AIzaSyDvLiprU9GxvrtD9N4-W9_bb4Dv94RIaWU';
const SCOPES = 'https://www.googleapis.com/auth/gmail.send';

const Contact = () => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Load the Google API client library
    const initClient = () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
        scope: SCOPES,
      });
    };
    
    gapi.load('client:auth2', initClient);
  }, []);

  const handleAuthClick = () => {
    return gapi.auth2.getAuthInstance().signIn();
  };

  const sendEmail = (data) => {
    const email = `To: vincent260705@gmail.com\r\n` +
                  `Subject: Contact from ${data.firstName} ${data.name}\r\n\r\n` +
                  `${data.message}`;
    
    const encodedEmail = btoa(email).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

    return gapi.client.gmail.users.messages.send({
      userId: 'me',
      resource: {
        raw: encodedEmail,
      },
    });
  };

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

    // Validate name inputs
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

    setErrors({});

    // Authenticate and send email
    handleAuthClick().then(() => {
      sendEmail(data)
        .then(() => {
          Swal.fire({
            title: "Email sent!",
            text: "I will get back to you as soon as possible.",
            icon: "success"
          });
        })
        .catch((error) => {
          console.error('Error sending email', error);
          Swal.fire({
            title: "Error",
            text: "Failed to send email.",
            icon: "error"
          });
        });
    }).catch((error) => {
      console.error('Error during authentication', error);
      Swal.fire({
        title: "Authentication Error",
        text: "Failed to authenticate.",
        icon: "error"
      });
    });
  };

  return (
    <section id="contact" className="w-full bg-light-first dark:bg-dark-first text-dark-first dark:text-light-first pb-10">
      <div className="flex w-full flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col w-1/3">
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
          <button
            type="submit"
            className="flex justify-center items-center text-lg bg-light-first dark:bg-dark-first relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
