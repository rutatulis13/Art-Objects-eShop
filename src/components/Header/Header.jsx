import React, { useEffect } from 'react'
import Aos from 'aos'
import { NavLink } from 'react-router-dom'
import { useOutletContext } from 'react-router'
import './Header.scss'
import { HashLink } from 'react-router-hash-link'

function Header() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const { obj } = useOutletContext()
  const touchMenu = obj.touchMenu

  return (
    <div className="header" data-aos="fade-down" id="menu">
      <div className="header__title-section">
        <div className="header__title-section--title">
          <div className="first-line safari_only1">
            <span className="title-1 letter1">a</span>
            <span className="title-1 letter2">r</span>
            <span className="title-1 letter3">t</span>
          </div>
          <div className="second-line .safari_only1">
            <span className="title-1 letter4">o</span>
            <span className="title-1 letter5">b</span>
            <span className="title-1 letter6">j</span>
            <span className="title-1 letter7">e</span>
            <span className="title-1 letter8">c</span>
            <span className="title-1 letter9">t</span>
            <span className="title-1 letter10">s</span>
          </div>
        </div>
        <div className="header__title-section--navigation">
          <ul>
            <li>
              <NavLink to={'/'}>
                <span
                  className={
                    !touchMenu
                      ? 'header__title-section--item mark'
                      : 'header__title-section--item2 mark'
                  }
                >
                  intro
                </span>
              </NavLink>
            </li>
            <li>
              <HashLink smooth to={'/home#about'}>
                <span
                  className={
                    !touchMenu
                      ? 'header__title-section--item mark'
                      : 'header__title-section--item2 mark'
                  }
                >
                  about
                </span>
              </HashLink>
            </li>
            <li>
              <HashLink smooth to={'/home#featured'}>
                <span
                  className={
                    !touchMenu
                      ? 'header__title-section--item mark'
                      : 'header__title-section--item2 mark'
                  }
                >
                  featured
                </span>
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
