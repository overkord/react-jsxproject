import React from 'react'
import BackgroundLines from '../assets/images/Rectangle 116.png'
import WhiteCrito from '../assets/images/Logo.png'

const Footer = () => {
  return (
    <footer>
            <img className="background-lines" src={BackgroundLines} alt="backgroundlines" />
            <div className="container">
                <div className="crito">
                    <a className="logo" href="index.html"><img src={WhiteCrito} alt="critologgo" /></a>
                    <p>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Placeat obcaecati voluptas<br /> voluptates! Voluptates laborum nam<br /> ratione minus necessitatibus, iure<br /> praesentium.</p>
                </div>
                <div>
                    <h3>Company</h3>
                    <p>About</p>
                    <p>Features</p>
                    <p>Works</p>
                    <p>Career</p>
                </div>
                
                <div>
                    <h3>Help</h3>
                    <p>Cusutomer Support</p>
                    <p>Delivery Details</p>
                    <p>Terms & Condition</p>
                    <p>Privacy Policy</p>
                </div>

                <div>
                    <h3>Resources</h3>
                    <p>Development Tutorial</p>
                    <p>Free eBooks</p>
                    <p>How to - Blog</p>
                    <p>Youtube Playlist</p>
                </div>

                <div>
                    <h3>Link</h3>
                    <p>Development Tutorial</p>
                    <p>Free eBooks</p>
                    <p>How to - Blog</p>
                    <p>Youtube Playlist</p>
                </div>
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