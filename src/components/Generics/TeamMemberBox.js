import React from 'react'

const TeamMemberBox = ({img, title, description}) => {
  return (
    <div>
    <img src={img} />
    <h4>{title}</h4>
    <p>{description}</p>
    </div>
  )
}

export default TeamMemberBox