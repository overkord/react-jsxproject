import React, { useState } from 'react'

const FormSection = () => {
    const [name, setname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleSubmit = async (e) => { 
      e.preventDefault();
      setErrorMessage('')

      const user = {name, email, message}
      const json = JSON.stringify(user)

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
        alert ('Är du säker på att du vill skicka ditt meddelande? vi kommer klippa din tung, ören och namn efternamn hela familj. Vill du avbryta? stäng ner hela din webbläsare hehe')
      } else if (result.status === 400) {
        alert('Något gick fel');
        clearForm('')

        if (!name || !email ||!message) {
            setErrorMessage('Vänligen fyll i samtliga fält')
            return
        }

      }
    };
  
    const clearForm = () => {
      setname('');
      setEmail('');
      setMessage('');
    };
    
  return (
    <section className="form-section">
        <div className="container">
            <div className="title">
                <h2>Leave us a message <br /> for any information</h2>
            </div> 
            {formSubmitted ? (
            <p classname="Sent">Tack för att du kontaktar oss <br /> Vi återkommer inom kort på din angivna email.</p>
            ) : (
            <form className="forminput" onSubmit={handleSubmit} noValidate>
                <input type="text" value={name} onChange={(e) => setname(e.target.value)} name="name" placeholder="Name*" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email*" required />
                <textarea rows="5" value={message} onChange={(e) => setMessage(e.target.value)} name="message" placeholder="Your Message*" required></textarea>
                    <div className="button">
                        <button 
                        className="btn-yellow2" type="submit" onClick={handleSubmit}>Send Message<i className="fa-regular fa-arrow-up-right"></i>
                        </button>
                        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
                    </div>
            </form>
            )}
        </div>
    </section>
  )
}

export default FormSection

