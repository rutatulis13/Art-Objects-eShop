import React, { useEffect } from 'react'
import Header from '../Header/Header'
import AboutSection from '../About/AboutSection'
import Carousel from '../Carousel/Carousel'
import MadeIn from '../MadeIn/MadeIn'
import AutoplayCarousel from '../AutoplayCarousel/AutoplayCarousel'
import Contacts from '../Contacts/Contacts'
import { useOutletContext } from 'react-router'

function Homepage() {
  useEffect(() => {
    setMenu('MENU')
  }, [])

  useEffect(() => {
    setLink('/menu')
  }, [])

  const { obj } = useOutletContext()
  const setMenu = obj.setMenu
  const setLink = obj.setLink

  return (
    <div className="layout">
      <Header />
      <AboutSection />
      <Carousel />
      <MadeIn />
      <AutoplayCarousel />
      <Contacts />
    </div>
  )
}

export default Homepage
