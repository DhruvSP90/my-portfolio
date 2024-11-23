import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img2.png'
import IMG2 from '../../assets/img3.png'
import IMG3 from '../../assets/img4.png'
import IMG4 from '../../assets/img5.png'
import IMG5 from '../../assets/img6.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Portfolio Website</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Police Patrol Optimization for Fuel Efficiency</h3>
            <small className='text-light'>Python | Pandas | Matplotlib | Machine LearningL</small>
            <div className="portfolio__item-cta">
              <a className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>E-Commerce Application</h3>
            <small className='text-light'>ASP.NET MVC | C# | JavaScript | HTML | CSS | Microsoft SQL Server | PayPal API</small>
            <div className="portfolio__item-cta">
              <a className='btn'>Github</a>
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>Expense Tracker Application</h3>
            <small className='text-light'>MongoDB | Express | ReactJS | Node.js</small>
            <div className="portfolio__item-cta">
              <a className='btn'>Github</a>
            </div>
            
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG5} alt="" />
            </div>
            <h3>Text File Compressor</h3>
            <small className='text-light'>Java</small>
            <div className="portfolio__item-cta">
              <a className='btn'>Github</a>
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects