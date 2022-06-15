import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import './Navigation.scss'
import Aos from 'aos'
import Modal from '../Modal/Modal'

function Navigation({ num, setArr, remove, setTouchMenu, menu, link }) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const [modal, setModal] = useState(false)

  return (
    <div className="header__container" data-aos="fade-down">
      <HashLink smooth to={'/home#menu'} className="desk">
        <span
          className="header__container--menu mark"
          onMouseEnter={() => setTouchMenu(true)}
          onMouseLeave={() => setTouchMenu(false)}
        >
          {menu}
        </span>
      </HashLink>
      <NavLink to={link} className="mobile">
        <span
          className="header__container--menu"
          onMouseEnter={() => setTouchMenu(true)}
          onMouseLeave={() => setTouchMenu(false)}
        >
          {menu}
        </span>
      </NavLink>
      <NavLink to={'/'}>
        <span className="header__container--logo" id="logoId-2">
          rutatulis svaigulys
        </span>
        <span className="header__container--logo" id="logoId">
          svaigulys
        </span>
      </NavLink>
      <div>
        <div
          className="header__container--cart-section"
          onClick={() => setModal((s) => !s)}
        >
          <span className="header__container--cart mark">cart</span>
          {num.length ? <span className="number">({num.length})</span> : null}
        </div>
        {modal ? (
          <Modal
            remove={remove}
            cart={num}
            setCart={setArr}
            modal={modal}
            setModal={setModal}
          />
        ) : null}
      </div>
    </div>
  )
}

export default Navigation
