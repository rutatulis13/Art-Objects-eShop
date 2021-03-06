import React from 'react'
import { NavLink } from 'react-router-dom'
import './CarouselItem.scss'

function CarouselItem({ image, showNum, likeButtonPressed, like }) {
  let newClass
  let check
  const checkId = () => {
    switch (image.id) {
      case 1:
        newClass = 'vase1'
        break
      case 2:
        newClass = 'vase2'
        break
      case 3:
        newClass = 'vase3'
        break
      case 4:
        newClass = 'vase4'
        break
      case 5:
        newClass = 'vase5'
        break
      case 6:
        newClass = 'vase6'
        break
      default:
    }
    return newClass
  }

  check = checkId()

  const checkNumber = () => {
    showNum(image.id)
  }

  const checking = () => {
    checkId()
    checkNumber()
  }

  const deleteNumber = () => {
    showNum(0)
  }

  return (
    <div className="carousel-images">
      <div className="carousel-images__icon">
        <svg
          onClick={() => likeButtonPressed(image.id)}
          className={like ? 'circle like' : 'circle'}
        >
          <use xlinkHref="#circle"></use>
        </svg>
      </div>
      <div className="carousel-images__item" key={image.id}>
        <div className="carousel-images__item--container">
          <NavLink to={'/home/' + image.id}>
            <img
              className="carousel-images--image"
              id={check}
              src={image.img}
              onMouseEnter={checking}
              onMouseLeave={deleteNumber}
              alt="vase-3"
            />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default CarouselItem
