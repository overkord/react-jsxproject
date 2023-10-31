import React from 'react'

const Button = ({type, url, title}) => {
    const getButtonClassName = () => {
    switch(type) {
        default:
            return 'btn-yellow'
        case 'black':
            return 'btn-black'
        case 'transparent':
            return 'btn-transparent'
        case 'black-next':
            return 'btn-black-next'
        case 'intro':
            return 'btn-intro'
        case 'yellowTwo':
            return 'btn-yellow2'
        case 'login':
            return 'btn-login'
        case 'logins':
            return 'btn-logins'
        case 'transcenter':
            return 'btn-transCenter'
      }
    }
   
    return (
    <a className={getButtonClassName()}
        href={url}>{title} 
        <i className="fa-regular fa-arrow-up-right"></i>
    </a>
  )
}

export default Button