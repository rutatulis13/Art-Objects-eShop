import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router'
import Navigation from '../Navigation/Navigation'

const Layout = () => {
  const [arr, setArr] = useState([])
  const [touchMenu, setTouchMenu] = useState(false)
  const [menu, setMenu] = useState('MENU')
  const [link, setLink] = useState('/menu')

  const remove = (id) => {
    console.log(arr)
    setArr((c) => c.filter((b) => b.id !== id))
  }

  useEffect(() => {
    let l = localStorage.getItem('cart')
    if (null === l) {
      l = JSON.stringify([])
    }
    l = JSON.parse(l)
    console.log([...new Set(l.map(JSON.stringify))].map(JSON.parse))
    setArr([...l])
  }, [])

  useEffect(() => {
    if (arr.length) {
      localStorage.setItem('cart', JSON.stringify([...arr]))
    }
  }, [arr])

  const obj = {
    arr: arr,
    setArr: setArr,
    touchMenu: touchMenu,
    menu,
    setMenu,
    link: link,
    setLink: setLink,
  }
  return (
    <div className="darkmode">
      <Navigation
        num={arr}
        setArr={setArr}
        remove={remove}
        setTouchMenu={setTouchMenu}
        touchMenu={touchMenu}
        setMenu={setMenu}
        menu={menu}
        link={link}
        setLink={setLink}
      />
      <Outlet context={{ obj }} />
    </div>
  )
}

export default Layout
