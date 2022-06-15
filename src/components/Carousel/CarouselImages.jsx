import React from 'react'
import CarouselItem from './CarouselItem.jsx'
import img from '../../constants/carousel.js'
import './CarouselImages.scss'

function CarouselImages({ showNum, likes, likeButtonPressed }) {
  return (
    <React.Fragment>
      {img.map((image, index) => (
        <CarouselItem
          image={image}
          index={index}
          key={image.id}
          showNum={showNum}
          likeButtonPressed={likeButtonPressed}
          like={likes.has(image.id)}
        />
      ))}
    </React.Fragment>
  )
}

export default CarouselImages
