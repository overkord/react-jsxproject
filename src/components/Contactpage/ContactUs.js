import React from 'react'
import ContactUsBox from '../Generics/ContactUsBox'

const ContactUs = () => {
  return (
    <section className="contact-us">
        <div className="container">
            <ContactUsBox type="location" title="Visit Us" paragraphOne="Sveavägen 31" paragraphTwo="111 34 STOCKHOLM"/>
            <ContactUsBox type="phone" title="Call Us" paragraphOne="+46 (8) 121 470 50" paragraphTwo="+46 (8) 121 470 51"/>
            <ContactUsBox type="envelope" title="Email Us" paragraphOne="info@crito.com" paragraphTwo="support@crito.com"/>
        </div>
    </section>
  )
}

export default ContactUs