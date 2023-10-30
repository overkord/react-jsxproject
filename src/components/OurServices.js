import React from 'react'
import WhiteLines from '../assets/images/whitelines3.png'
import OurServiceBox from './Generics/OurServiceBox'
import Button from './Generics/Button'



const OurServices = () => {
  return (
    <section className="our-services">
    <img className="background-lines" src={WhiteLines} alt="WhiteLines" />
    <div className="container">
        <div className="section-title">
            <p>Our Services</p>
            <h2>We Provide The Best Service For Consulting</h2>
        </div>
        <div className="examples">
            <OurServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
            <OurServiceBox title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
            <OurServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
            <OurServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
        </div>
        <div className="center-content">
        <Button type="transparent" title="Browse Services" url="/services"/>   
        </div>
    </div>
</section>
  )
}

export default OurServices