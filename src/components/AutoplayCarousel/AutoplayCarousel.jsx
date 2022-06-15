import React from 'react'
import autoplayCarouselText from '../../constants/autoplayCarousel'
import './AutoplayCarousel.scss'

function AutoplayCarousel() {
  return (
    <div className="autoplay-carousel">
      <div className="autoplay-carousel--border"></div>
      <div className="autoplay-carousel__slider">
        <div className="autoplay-carousel__slider--text">
          {autoplayCarouselText.map((t) => (
            <React.Fragment key={Math.random()}>
              <div className="autoplay-carousel__slider--animated-text">
                <span>{t.text}</span>
              </div>
              <div className="autoplay-carousel__slider--lighter">
                <span>{t.textLighter}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="autoplay-carousel--border"></div>
    </div>
  )
}

export default AutoplayCarousel
