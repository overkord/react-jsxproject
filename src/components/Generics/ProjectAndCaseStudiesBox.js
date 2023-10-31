import React from 'react'


const WhyChooseUsBox = ({img, title, description, }) => {
  return (
    <a className="project" href="#"> 
    <img src={img} />
    <h3>{title}</h3>
    <div className="readmore">{description}<i className="fa-regular fa-arrow-up-right"></i></div>
</a>
  )
}

export default WhyChooseUsBox