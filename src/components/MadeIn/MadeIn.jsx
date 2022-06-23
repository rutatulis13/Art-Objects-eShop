import React, { useEffect } from 'react'
import Aos from 'aos'
import './MadeIn.scss'

function MadeIn() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="origin">
      <div className="origin__text--made">made in</div>
      <div className="origin__text--new-york" data-aos="fade-right">
        new york
      </div>
      <div className="origin__text--new-york" data-aos="fade-up">
        city
      </div>
    </div>
  )
}

export default MadeIn
