import React from 'react'
import SectionTitle from './Generics/SectionTitle'
import ProjectAndCaseStudiesBox from '../components/Generics/ProjectAndCaseStudiesBox'
import Button from './Generics/Button'
import imgNewspaper from '../assets/images/articleimage1.png'
import imgApple from '../assets/images/articleimage2.png'
import imgSupplies from '../assets/images/articleimage3.png'
import imgLaptop from '../assets/images/articleimage4.png'

const ProjectAndCaseStudies = () => {
  return (
    <section className="project-and-case">
    <div className="container">
        <SectionTitle title="Project & Case Studies" description="Let's Looks Our Global Projects"/>
        <div className="project-and-cases">
            <ProjectAndCaseStudiesBox img={imgNewspaper} title="Grow you business" description="Read More"/>
            <ProjectAndCaseStudiesBox img={imgApple} title="Why your client needs a responsive website" description="Read More"/>
            <ProjectAndCaseStudiesBox img={imgSupplies} title="Educate your employees to get better results" description="Read More"/>
            <ProjectAndCaseStudiesBox img={imgLaptop} title="Business Insights is a important piece of your business" description="Read More"/>
        </div>
        <div className="center-content">
            <Button type="black" url="/services" title="All Recent Projects"/>
        </div>
    </div>
</section>
  )
}

export default ProjectAndCaseStudies