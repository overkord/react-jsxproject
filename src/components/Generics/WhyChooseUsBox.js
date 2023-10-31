import React from 'react'


const WhyChooseUsBox = ({type, title, description, }) => {
  const getIconClassName = () => {
    switch(type) {
      case 'thumbsup':
        return 'fa-sharp fa-light fa-thumbs-up'
      case 'hexagon':
        return 'fa-sharp fa-light fa-hexagon'
      case 'scale':
        return 'fa-sharp fa-light fa-scale-unbalanced-flip'
      case 'brain':
        return 'fa-sharp fa-light fa-head-side-brain'
    }
  }
  return (
    
    <div className="proof">
    <i className={getIconClassName()}></i>
    <h4>{title}</h4>
    <p>{description}</p>
    </div>
  )
}

export default WhyChooseUsBox