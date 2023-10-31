import React from 'react'
import imgWavyRight from '../assets/images/Element.svg'
import Button from './Generics/Button'

const NewsLetter = () => {
  return (
    <section class="newsletter">
    <img className="wavy-right" src={imgWavyRight} alt="wavy-right" />
    <div class="container">
        <h2>Get News Updates By Signup</h2>
        <form>
            <input type="text" placeholder="username@domain.com" />
            <Button type="yellow" title="Subscribe" url="/services"/>
        </form>
    </div>
</section>
  )
}

export default NewsLetter