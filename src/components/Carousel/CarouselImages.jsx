import React from 'react'
import CarouselItem from './CarouselItem.jsx'
import img from '../../constants/carousel.js'

function CarouselImages({ showNum, likes, likeButtonPressed }) {
  console.log(likes)
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
