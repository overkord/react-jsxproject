import React from 'react'
import Button from '../Generics/Button'
import FeatureBox from '../Generics/FeatureBox'

const Features = () => {
  return (
    <section className="features">
        <div className="container">
            <div className="section-title">
                <p>Features</p>
                <h2>Our Accounting is<br />
                    trusted by thousand<br />
                    of companies</h2>
                    <Button type="yellowTwo" title="Learn More" url="/consultining.html" />  
            </div>
            <div className="management">
                <FeatureBox type="handshake" title="Business Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                <FeatureBox type="lightbulb" title="Startup Business" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                <FeatureBox type="chart" title="Financial Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                <FeatureBox type="openbox" title="Risk Management" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
            </div>
        </div>
    </section>
  )
}

export default Features