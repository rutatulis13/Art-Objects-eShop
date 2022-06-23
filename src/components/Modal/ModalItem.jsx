import React, { useState } from 'react'

function ModalItem({ b, cart, setCart, remove }) {
  const [amount, setAmount] = useState()

  const addOne = () => {
    setAmount(() => sum + 1)
    setCart((item) => [...item, b])
  }

  const minusOne = () => {
    setAmount(() => sum - 1)
    const copyArr = [...cart]
    copyArr.splice(-1)
    setCart(copyArr)
  }

  const sum = cart.map((g) => g.id === b.id).filter((b) => b).length

  return (
    <div key={b.id} className="modal__content">
      <b>{b.name}</b>
      <div className="modal__content--actions">
        <span className="modal__content--plus" onClick={addOne}>
          +
        </span>
        <span>{sum} </span>
        <span className="modal__content--minus" onClick={minusOne}>
          -
        </span>
        <span onClick={() => remove(b.id)}>x</span>
      </div>
    </div>
  )
}

export default ModalItem
