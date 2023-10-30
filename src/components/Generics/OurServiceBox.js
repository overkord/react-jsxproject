import React from 'react'

const OurServiceBox = ({title, description, url}) => {
 
  return (
    <div className="services">
    <hr /> 
    <p>{title}</p>
    <h6>{description}</h6>
    <a className="btn-black-next" href={url}><i className="fa-light fa-arrow-right"></i></a>  
</div>
  )
}

export default OurServiceBox