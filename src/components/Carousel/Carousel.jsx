import React, { useState, useEffect } from 'react'
import CarouselImages from './CarouselImages'
import img from '../../constants/carousel'
import './Carousel.scss'

function Carousel() {
  const [imgId, setImgId] = useState(0)
  const [likes, setLikes] = useState(new Set())

  const showNum = (number) => {
    setImgId(number)
  }

  const likeButtonPressed = (id) => {
    const likesCopy = new Set(likes)
    likesCopy.has(id) ? likesCopy.delete(id) : likesCopy.add(id)
    setLikes(likesCopy)
  }

  useEffect(() => {
    let l = localStorage.getItem('likes')
    l = JSON.parse(l)
    setLikes(new Set(l))
  }, [])

  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify([...likes]))
  }, [likes])

  return (
    <React.Fragment>
      <div className="products" id="featured">
        <span className="horisontal" id="horisontal">
          featured
        </span>
        <span className="horisontal" id="horisontal">
          view all objects
        </span>
      </div>
      <div className="carousel" data-aos="fade-up">
        <div className="carousel__zoom">
          <CarouselImages
            showNum={showNum}
            likeButtonPressed={likeButtonPressed}
            likes={likes}
          />
        </div>
      </div>
      <div className="drag">
        <span className="horisontal" id="horisontal">
          drag
        </span>
        <span className="carousel-img" id="horisontal-1">
          {imgId}/{img.length}
        </span>
      </div>
    </React.Fragment>
  )
}

export default Carousel
