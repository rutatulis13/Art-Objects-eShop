import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './Modal.scss'
import ModalItem from './ModalItem'

function Modal({ setModal, cart, setCart, remove }) {
  console.log(cart.length)
  const unique = [...new Set(cart)]

  const itemSum = unique.map(
    (b) => cart.map((g) => g.id === b.id).filter((b) => b).length * b.price,
  )

  const modalRef = useRef()

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setModal(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)

    const handleKeyboardClick = (e) => {
      if (e.keyCode === 27) {
        setModal(false)
      }
    }
    document.addEventListener('keydown', handleKeyboardClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.addEventListener('keydown', handleKeyboardClick)
    }
  }, [])

  return (
    <div className="modal" ref={modalRef}>
      <button className="modal__close-btn" onClick={() => setModal(false)}>
        Close
      </button>
      {cart.length > 0 ? (
        <div>
          {unique.map((b) => (
            <ModalItem b={b} cart={cart} setCart={setCart} remove={remove} />
          ))}
          <div className="modal__content--items-buy">
            <span>
              Total: {parseInt(itemSum.reduce((curr, next) => curr + next))} Eur
            </span>
            <NavLink to={'/thanks'} className="modal__buy-btn">
              Buy
            </NavLink>
          </div>
        </div>
      ) : (
        <span>your cart is empty</span>
      )}
    </div>
  )
}

export default Modal
