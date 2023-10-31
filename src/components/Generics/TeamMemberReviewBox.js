import React from 'react'

const TeamMemberReviewBox = ({img, title, description }) => {
  return (
    <div>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<p className="comment">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
<div className="worker">
      <img src={img} />
<div>
    <h4>{title}</h4>
    <p>{description}</p>
    </div>
</div>
</div>
  )
}

export default TeamMemberReviewBox