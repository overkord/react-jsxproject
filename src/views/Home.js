import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Showcase from '../components/Showcase'
import Company from '../components/Company'
import Features from '../components/Features'
import AbouutCompany from '../components/AbouutCompany'
import OurServices from '../components/OurServices'


const Home = () => {
  return (
    <div className="wrapper-grid">
        <Header />
        <Showcase />
        <Company />
        <Features />
        <AbouutCompany />
        <OurServices />
        <Footer />
    </div>
  )
}

export default Home