import React from 'react'
import imgWavyLines from '../../assets/images/Rectangle 607.png'

const Headline = () => {
  return (
    <section className="headline">
        <img src={imgWavyLines} alt="ImageOfWavyLines" />
        <div className="title">
            <p className="home">Home</p>
            <p className="contact">Contact</p>
            <h1 className="connect">Let's Connect</h1>
        </div>
    </section>
  )
}

export default Headline