import React, { useEffect } from 'react'
import Aos from 'aos'
import './MadeIn.scss'

function MadeIn() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="made-in">
      <div className="made">MADE IN</div>
      <div className="new-york" data-aos="fade-right">
        NEW YORK
      </div>
      <div className="new-york" data-aos="fade-up">
        CITY
      </div>
    </div>
  )
}

export default MadeIn
