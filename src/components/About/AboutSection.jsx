import React, { useEffect } from 'react'
import Aos from 'aos'
import vase1 from '../../assets/vase-1.jpg'
import vase2 from '../../assets/vase-2.jpg'
import './About.scss'
import About from './About'

function AboutSection() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="about">
      <div className="about__images">
        <div className="about__images--left" data-aos="fade-up">
          <span className="about__images--horisontal">APOL</span>
          <img className="about__images--left-vase" src={vase1} alt="vase" />
        </div>
        <div
          className="about__images--right safari_only_vertical"
          data-aos="fade-right"
        >
          <span className="about__images--vertical">HADR</span>
          <img className="about__images--right-vase" src={vase2} alt="vase" />
        </div>
      </div>
      <div id="about">
        <About />
      </div>
    </div>
  )
}

export default AboutSection
