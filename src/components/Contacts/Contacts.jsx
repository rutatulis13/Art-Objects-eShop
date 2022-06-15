import React, { useState } from 'react'
import { ThemeContext, themes } from '../../contexts/themeContext'
import { HashLink } from 'react-router-hash-link'
import './Contacts.scss'

function Contacts() {
  const [darkMode, setDarkMode] = useState(true)
  const [modeName, setModeName] = useState('dark mode')

  return (
    <footer>
      <div className="footer" id="back">
        <HashLink smooth to={'/home#menu'} className="footer__menu--terms row">
          <span className="mark footer--items back">(back to top)</span>
        </HashLink>
        <div className="footer__menu column">
          <div className="footer__menu--terms">
            <span className="footer--items">terms & conditions</span>
          </div>
          <div className="footer__border">
            <div className="footer__border--line"></div>
          </div>
          <div className="footer__menu--terms">
            <span className="footer--items">shipping</span>
          </div>
          <div className="footer__border">
            <div className="footer__border--line"></div>
          </div>

          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <span
                className="mark footer--items"
                onClick={() => {
                  setDarkMode(!darkMode)
                  changeTheme(darkMode ? themes.dark : themes.light)
                  setModeName(darkMode ? 'light mode' : 'dark mode')
                }}
              >
                {modeName}
              </span>
            )}
          </ThemeContext.Consumer>
        </div>
        <span className="footer--items years row " id="years">
          ©{new Date().getFullYear()}
        </span>
      </div>

      <div className="footer__author-container">
        <span className="footer__author-container--author made-by">
          made by rutatulis svaigulys
        </span>
      </div>
    </footer>
  )
}

export default Contacts
