import React from 'react'
import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'
import GirlCorridor from '../../assets/images/girlbook.png'
import { NavLink, Link } from 'react-router-dom'



const AbouutCompany = () => {
  return (
    <section className="about-company">
<div className="container">
        <img className="image" src={GirlCorridor} alt="Girl in corridor" />
        <div className="blue-box">
            <h4>Samantha Brown, <span className="founder">Founder</span></h4>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
        </div>
            <div className="content-box">
                <SectionTitle title="About Company" description="We Are Business Consulting & Credit Repair Experts"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.<br /><br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
            <div className="center-content">
            <Button type="black" title="Learn More" url="/services" />
                <div className="intro">
                    <div className="icon-container">
                        <i className="fa-solid fa-play fa-2xs"></i>
                    </div>
                    <p>Intro Video</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default AbouutCompany