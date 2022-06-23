import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './Modal.scss'
import ModalItem from './ModalItem'

function Modal({ setModal, cart, setCart, remove, test2 }) {
  // console.log([...new Set(cart)])

  // const unique = [...new Set(cart)]
  // console.log(unique)
  // const test3 = [...new Set(test2)]
  // console.log(test3)
  // let unique2 = cart.filter((item, i, ar) => ar.indexOf(item) === i)
  // console.log(unique2)
  // const copy = [...cart]
  // console.log('copy', copy)

  // let b = copy.filter((x, i, a) => a.indexOf(x) === i)
  // console.log(b)

  const unique = [...new Set(cart.map(JSON.stringify))].map(JSON.parse)
  // const unique = cart.filter(function (item, pos) {
  //   return cart.indexOf(item) === pos
  // })

  console.log(unique)

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

  const deleteCart = () => {
    localStorage.removeItem('cart')
  }

  return (
    <div className="modal" ref={modalRef}>
      <button className="modal__close-btn" onClick={() => setModal(false)}>
        Close
      </button>
      {cart.length > 0 ? (
        <div>
          {unique.map((b) => (
            <ModalItem
              b={b}
              cart={cart}
              setCart={setCart}
              remove={remove}
              key={Math.random()}
            />
          ))}
          <div className="modal__content--items-buy">
            <span>
              Total: {parseInt(itemSum.reduce((curr, next) => curr + next))} Eur
            </span>
            <NavLink
              to={'/thanks'}
              className="modal__buy-btn"
              onClick={deleteCart}
            >
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
