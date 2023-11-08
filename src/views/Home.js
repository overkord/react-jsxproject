import React from 'react'
import Header from '../components/Homepage/Header'
import Footer from '../components/Homepage/Footer'
import Showcase from '../components/Homepage/Showcase'
import Company from '../components/Homepage/Company'
import Features from '../components/Homepage/Features'
import AbouutCompany from '../components/Homepage/AbouutCompany'
import OurServices from '../components/Homepage/OurServices'
import WhyChooseUs from '../components/Homepage/WhyChooseUs'
import ProjectAndCaseStudies from '../components/Homepage/ProjectAndCaseStudies'
import TeamMembers from '../components/Homepage/TeamMembers'
import ArticleAndNews from '../components/Homepage/ArticleAndNews'
import NewsLetter from '../components/Homepage/NewsLetter'
import '../index.css';


const Home = () => {
  return (
    <div className="wrapper-grid">
        <Header />
       <main>
       <Showcase />
        <Company />
        <Features />
        <AbouutCompany />
        <OurServices />
        <WhyChooseUs />
        <ProjectAndCaseStudies />
        <TeamMembers />
        <ArticleAndNews />
        <NewsLetter />
       </main>
        <Footer />
    </div>
  )
}

export default Home