import React, { useEffect } from 'react'
import Aos from 'aos'
import './About.scss'

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="about__text" data-aos="fade-up">
      <div className="about__text--intro">
        <span className="about__text--title">ABOUT</span>
        <p className="about__text--p">Lorem ipsum dolor sit amet,</p>
      </div>
      <p className="about__text--p">
        {' '}
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident.
      </p>
    </div>
  )
}

export default About
