import React from 'react'
import Footer from '../components/Homepage/Footer'
import Header from '../components/Homepage/Header'
import '../contact.css';
import Headline from '../components/Contactpage/Headline';
import ContactUs from '../components/Contactpage/ContactUs';
import FormSection from '../components/Contactpage/FormSection';
import Map from '../components/Contactpage/Map';


const Contacts = () => {
  return (
    <>
        <Header />
        <main>
          <Headline />
          <ContactUs />
          <FormSection />
          <Map />
        </main>
        <Footer />
        </>
  )
}

export default Contacts