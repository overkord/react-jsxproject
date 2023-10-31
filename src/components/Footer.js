import React from 'react'
import BackgroundLines from '../assets/images/Rectangle 116.png'
import WhiteCrito from '../assets/images/Logo.png'
import FooterBox from './Generics/FooterBox'


const Footer = () => {
  return (
    <footer>
            <img className="background-lines" src={BackgroundLines} alt="backgroundlines" />
            <div className="container">
                <div className="crito">
                    <a className="logo" href="index.html"><img src={WhiteCrito} alt="critologgo" /></a>
                    <p>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Placeat obcaecati voluptas<br /> voluptates! Voluptates laborum nam<br /> ratione minus necessitatibus, iure<br /> praesentium.</p>
                </div>
                    <FooterBox Headline ="Company" ParagraphOne="About" ParagraphTwo="Features" ParagraphThree="Works" ParagraphFour="Career"/>
                    <FooterBox Headline ="Help" ParagraphOne="Customer Support" ParagraphTwo="Delivery Details" ParagraphThree="Terms & Conditions" ParagraphFour="Privacy Policy"/>
                    <FooterBox Headline ="Resources" ParagraphOne="Development Tutorial" ParagraphTwo="Free eBooks" ParagraphThree="How to - Blog" ParagraphFour="Youtube Playlist"/>
                    <FooterBox Headline ="Link" ParagraphOne="Decelopment Tutorial" ParagraphTwo="Free eBooks" ParagraphThree="How to - Blog" ParagraphFour="Youtube Playlist"/>               
            </div>
            
            <div className="copyright">
                <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                <div className="social-media-bar">
                    <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            </div>
        </footer>  
  )
}

export default Footer