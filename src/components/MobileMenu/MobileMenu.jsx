import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Aos from 'aos'
import './MobileMenu.scss'
import { useOutletContext } from 'react-router'

function MobileMenu() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  useEffect(() => {
    setMenu('HOME')
  }, [])

  useEffect(() => {
    setLink('/home')
  }, [])

  const { obj } = useOutletContext()
  const setMenu = obj.setMenu
  const setLink = obj.setLink

  return (
    <div className="mobile-navigation" data-aos="fade-up">
      <ul className="mobile-navigation__container">
        <li>
          <NavLink to={'/'}>
            <span className="mobile-navigation__item mark">INTRO</span>
          </NavLink>
        </li>
        <li>
          <HashLink smooth to={'/home#about'}>
            <span className="mobile-navigation__item mark">ABOUT</span>
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={'/home#featured'}>
            <span className="mobile-navigation__item mark">FEATURED</span>
          </HashLink>
        </li>
      </ul>
      {/* </div> */}
    </div>
  )
}

export default MobileMenu
