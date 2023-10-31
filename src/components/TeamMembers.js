import React from 'react'
import SectionTitle from './Generics/SectionTitle'
import Button from './Generics/Button'
import TeamMemberBox from './Generics/TeamMemberBox'
import imgKristine from '../assets/images/kristine.svg'
import imgMark from '../assets/images/mark.svg'
import imgKimberley from '../assets/images/kimberley.svg'
import imgJustin from '../assets/images/justin.svg'
import TeamMemberReviewBox from './Generics/TeamMemberReviewBox'
import imgCassandra from '../assets/images/cassandra.png'
import imgAmanda from '../assets/images/amanda.png'
import imgJack from '../assets/images/jack.png'

const TeamMembers = () => {
  return (
    <section className="team-members">
            <div className="container">
                <Button type ="yellow" title ="Browse Team" url="/services"/>
                <SectionTitle title="Meet Our Team" description="Experience Team Members"/>
                <div className="images">
                <TeamMemberBox img={imgKristine} title="Kristine Palmer" description="Chef Operation Officer"/>
                <TeamMemberBox img={imgMark} title="Mark Aubri" description="Senior Consultant"/>
                <TeamMemberBox img={imgKimberley} title="Kimberley Hansen" description="Senior Consultant"/>
                <TeamMemberBox img={imgJustin} title="Justin Willoman" description="Senior Tech Consultant"/>     
                </div>
            </div>
            <div className="dots">
                <div className="div"></div>
                <div className="div-active"></div>
                <div className="div"></div>
                <div className="div"></div>
                <div className="div"></div>
            </div>
            <div className="bg-teammembers">
                <div className="content-box">
                    <SectionTitle title="Testimonal" description="What Our Client Says" />
                <div className="employees container">

                    <TeamMemberReviewBox title="Cassandra Warren" description="Buusiness Manager, Dorfus" img={imgCassandra} />
                    <TeamMemberReviewBox title="Amanda Tulling" description="Senior Developer, Square" img={imgAmanda} />
                    <TeamMemberReviewBox title="Jack McDogglas" description="Key Account Manager, Gobona" img={imgJack} />
    
                </div>
                <Button type ="black" title ="All Reviews" url="/services"/>
                </div>
            </div>    
    </section>

  )
}

export default TeamMembers