import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Product from './components/Product/Product'
import Loader from './components/Loader/Loader'
import Homepage from './components/Homepage/Homepage'
import Layout from './components/Layout/Layout'
import Thanks from './components/Thanks/Thanks'
import MobileMenu from './components/MobileMenu/MobileMenu'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loader />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<Homepage />} />
            <Route path="/home/:id" element={<Product />}></Route>
            <Route path="/menu" element={<MobileMenu />}></Route>
          </Route>
          <Route path="/thanks" element={<Thanks />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
