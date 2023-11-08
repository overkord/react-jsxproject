import React from 'react'
import ImgTwoGirls from '../../assets/images/2girls.png'
import SectionTitle from '../Generics/SectionTitle'
import WhyChooseUsBox from '../Generics/WhyChooseUsBox'

const WhyChooseUs = () => {
  return (
    <section className="choose-us">
    <div className="container">
            <SectionTitle title="Why Choose Us" description="Why We Are The Best Business Consulting Agency" />
            <WhyChooseUsBox type="thumbsup" title="Process Excellence" description="Lorem, ipsum dolor sit amet consectetur." />
            <WhyChooseUsBox type="hexagon" title="Strategic Planning" description="Lorem, ipsum dolor sit amet consectetur." />
            <WhyChooseUsBox type="scale" title="Experience Design" description="Lorem, ipsum dolor sit amet consectetur." />
            <WhyChooseUsBox type="brain" title="Artificial Inteligence" description="Lorem, ipsum dolor sit amet consectetur." />
    </div>
    <div className="content-box">
        <div className="image">
            <img src={ImgTwoGirls} alt="pic-of-2-girls" />
        </div>
        <div className="grey-box"></div>
    </div>
</section>
  )
}

export default WhyChooseUs