import React from 'react'
import WavyLines from '../../assets/images/Rectangle 607.png'
import ManTablet from '../../assets/images/Image.png'
import Button from '../Generics/Button'
import SectionTitle from '../Generics/SectionTitle'

const Showcase = () => {
  return (
    <>
         <section className="showcase">
            <img className="background-lines" src={WavyLines} alt="ImgOfWavyLines" />
            <div className="container">
                <div className="content">
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your visions and value proposition and turn them into testable prototypes.</p>
                    <Button type="yellow" title="Get Consulting" url="/services"/>
                    <Button type="transparent" title="Learn More" url="/services"/>
                 
                </div>
                <img src={ManTablet} alt="a man with a suit and tablet" />
            </div>
    </section>
    </>
  )
}

export default Showcase