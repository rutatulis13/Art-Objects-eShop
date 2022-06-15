import React from 'react'
import './Loader.scss'

const Loader = () => {
  setTimeout(function () {
    window.location.replace('home')
  }, 3000)

  return (
    <div className="loader__container">
      <span className="loader__container--title">rutatulis svaigulys</span>
      <br></br>
      <span className="loader__container--text">presents</span>
    </div>
  )
}

export default Loader
