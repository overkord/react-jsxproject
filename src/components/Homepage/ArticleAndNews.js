import React from 'react'
import Button from '../Generics/Button'
import imgLaugh from '../../assets/images/25th.png'
import imgPc from '../../assets/images/17th.png'
import imgBooks from '../../assets/images/13th.png'
import ArticleAndNewsBox from '../Generics/ArticleAndNewsBox'




const ArticleAndNews = () => {
  return (
    <section className="article-news">
        <div className="container">

            
            <div className="section-title">
                <p>Article & News</p>
                <h2>Get Every Single Articles & News</h2>
                <div className="button"><Button type="transcenter" title="Browse Articles" url="/services" /></div>  
                </div>
            
            <div className="dates">
                <ArticleAndNewsBox date="25" description="How To Use Digitalization 
                        In The Classroom" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." img={imgLaugh} />
                <ArticleAndNewsBox date="17" description="How To Implement Chat GPT
                        In Your Projects" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." img={imgPc} />
                <ArticleAndNewsBox date="13" description="The Guide To Support 
                        Modern CSS Design" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." img={imgBooks} />
            </div>
            <div className="dots">
                <div className="div-active"></div>
                <div className="div"></div>
                <div className="div"></div>
                <div className="div"></div>
                <div className="div"></div>
            </div>
        </div>
    </section>
  )
}

export default ArticleAndNews