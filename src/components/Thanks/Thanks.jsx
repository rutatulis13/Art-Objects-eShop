import React from 'react'
import '../Loader/Loader.scss'

const Thanks = () => {
  setTimeout(function () {
    window.location.replace('home')
  }, 3000)

  return (
    <div className="loader__container">
      <span className="loader__container--text">Thank you for buying!</span>
    </div>
  )
}

export default Thanks
