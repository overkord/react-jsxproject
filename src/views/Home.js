import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Showcase from '../components/Showcase'
import Company from '../components/Company'
import Features from '../components/Features'
import AbouutCompany from '../components/AbouutCompany'
import OurServices from '../components/OurServices'
import WhyChooseUs from '../components/WhyChooseUs'
import ProjectAndCaseStudies from '../components/ProjectAndCaseStudies'
import TeamMembers from '../components/TeamMembers'
import ArticleAndNews from '../components/ArticleAndNews'
import NewsLetter from '../components/NewsLetter'
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