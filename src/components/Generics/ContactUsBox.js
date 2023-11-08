import React from 'react'

const ContactUsBox = ({type, title, paragraphOne, paragraphTwo}) => {
    const getIcon = () => {
        switch(type) {
            default:
                return 'fa-solid fa-location-dot'
            case 'phone':
                return 'fa-solid fa-phone'
            case 'envelope':
                return 'fa-solid fa-envelope'
        }
    }
  return (
        <div className="contacts">
            <i className={getIcon()}></i>
            <h4>{title}</h4>
            <p>{paragraphOne}</p>
            <p>{paragraphTwo}</p>
        </div>
  )
}

export default ContactUsBox