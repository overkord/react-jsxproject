import React from 'react'

const FooterBox = ({Headline, ParagraphOne, ParagraphTwo, ParagraphThree, ParagraphFour}) => {
  return (
    <div>
    <h3>{Headline}</h3>
    <p>{ParagraphOne}</p>
    <p>{ParagraphTwo}</p>
    <p>{ParagraphThree}</p>
    <p>{ParagraphFour}</p>
</div>
  )
}

export default FooterBox