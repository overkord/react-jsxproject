import React from 'react'

const ArticleAndNewsBox = ({date, title, description, text, img}) => {
  return (
<div className="march">
<div className="boxes">
<div className="box">
<h2>{date}</h2>
<p>Mar</p>
</div>
</div>
<img src={img}/>
<p>Business</p>
<h3>{description}</h3>
<p>L{text}</p>
</div>
  )
}

export default ArticleAndNewsBox