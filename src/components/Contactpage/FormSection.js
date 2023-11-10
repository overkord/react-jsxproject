import React, { useState } from 'react';

const FormSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const nameRegex = /^[A-Za-z\s]+$/; // Regular expression for name validation
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; // Regular expression for email validation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.match(nameRegex) || !email.match(emailRegex) || !message) {
      setErrorMessage('Vänligen fyll i samtliga fält korrekt');
      return;
    }

    const user = { name, email, message };
    const json = JSON.stringify(user);

    const result = await fetch(
      'https://win23-assignment.azurewebsites.net/api/contactform',
      {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: json,
      }
    );

    if (result.status === 200) {
      setFormSubmitted(true);
      alert('Tack för att du kontaktar oss.');
    } else if (result.status === 400) {
      alert('Något gick fel');
      clearForm();
    }
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="form-section">
      <div className="container">
        <div className="title">
          <h2>Leave us a message for any information</h2>
        </div>
        {formSubmitted ? (
          <p className="Sent">
            Vi återkommer inom kort på din angivna email.
          </p>
        ) : (
          <form className="forminput" onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              placeholder="Name*"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Email*"
              required
            />
            <textarea
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              placeholder="Your Message*"
              required
            ></textarea>
            <div className="button">
              <button
                className="btn-yellow2"
                type="submit"
                onClick={handleSubmit}
              >
                Send Message<i className="fa-regular fa-arrow-up-right"></i>
              </button>
              {errorMessage && <p className="errorMessage">{errorMessage}</p>}
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default FormSection;
