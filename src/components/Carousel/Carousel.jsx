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

  useEffect(() => {
    let l = localStorage.getItem('vaseLikes')
    if (null === l) {
      l = JSON.stringify([])
    }
    l = JSON.parse(l)
    setLikes(new Set(l))
  }, [])

  useEffect(() => {
    localStorage.setItem('vaseLikes', JSON.stringify([...likes]))
  }, [likes])

  const likeButtonPressed = (id) => {
    const likesCopy = new Set(likes)
    likesCopy.has(id) ? likesCopy.delete(id) : likesCopy.add(id)
    setLikes(likesCopy)
  }

  return (
    <React.Fragment>
      <div className="products-obj" id="featured">
        <span className="horisontal" id="horisontal">
          FEATURED
        </span>
        <span className="horisontal" id="horisontal">
          VIEW ALL OBJECTS
        </span>
      </div>
      <div className="gallery-carousel" data-aos="fade-up">
        <div className="zoomImg">
          <CarouselImages
            showNum={showNum}
            likeButtonPressed={likeButtonPressed}
            likes={likes}
          />
        </div>
      </div>
      <div className="products-drag">
        <span className="horisontal" id="horisontal">
          DRAG
        </span>
        <span className="num-carousel" id="horisontal-1">
          {imgId}/{img.length}
        </span>
      </div>
    </React.Fragment>
  )
}

export default Carousel
