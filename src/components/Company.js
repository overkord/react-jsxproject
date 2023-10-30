import React from 'react'
import Paperz from '../assets/images/8.png'
import Dorfuz from '../assets/images/5.png'
import Martino from '../assets/images/6.png'
import Square from '../assets/images/9.png'
import Gobana from '../assets/images/10.png'

const Company = () => {
  return (

    <section className="company">
            <img src={Paperz} alt ="Paperz" />
            <img src={Dorfuz} alt ="Dorfus" />
            <img src={Martino} alt="Martino" />
            <img src={Square} alt ="Square" />
            <img src={Gobana} alt ="Gobana" />    
    </section>

  )
}

export default Company