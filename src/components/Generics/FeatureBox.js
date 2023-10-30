import React from 'react'


const FeatureBox = ({type, title, description, }) => {
  const getIconClassName = () => {
    switch(type) {
      case 'handshake':
        return 'fa-light fa-handshake-angle'
      case 'lightbulb':
        return 'fa-light fa-lightbulb-exclamation-on'
      case 'chart':
        return 'fa-solid fa-chart-mixed'
      case 'openbox':
        return 'fa-light fa-box-open-full'
    }
  }
  return (
    
    <div className="side">
    <i className={getIconClassName()}></i>
    <h4>{title}</h4>
    <p>{description}</p>
    </div>
  )
}

export default FeatureBox