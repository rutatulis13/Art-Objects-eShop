import React, { useEffect } from 'react'
import './ProductItem.scss'

function ProductItem({
  findImg,
  findId,
  name,
  price,
  width,
  height,
  description,
  arr,
  setArr,
  img,
}) {
  let newClass
  let check

  const checkId = () => {
    switch (findId) {
      case 1:
        newClass = 'vase1'
        break
      case 2:
        newClass = 'vase2'
        break
      case 3:
        newClass = 'vase3'
        break
      case 4:
        newClass = 'vase4'
        break
      case 5:
        newClass = 'vase5'
        break
      case 6:
        newClass = 'vase6'
        break
      default:
    }
    return newClass
  }
  check = checkId()

  const checking = () => {
    checkId()
  }

  // const likeButtonPressed = (id) => {
  //   const likesCopy = new Set(arr)
  //   likesCopy.has(id) ? likesCopy.delete(id) : likesCopy.add(id)
  //   setArr(likesCopy)
  // }

  const addItem = () => {
    setArr((item) => [...item, img])
  }

  // useEffect(() => {
  //   JSON.parse(localStorage.getItem('cart'))
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify([arr]))
  // }, [arr])

  // const addItem = (id) => {
  //   const copy = new Set(arr)
  //   copy.has(id) ? copy.delete(id) : copy.add(id)
  //   //   setArr(likesCopy)
  //   setArr((copy) => [...copy, img])
  // }

  console.log(arr)

  return (
    <div className="product-item">
      <div className="product-item__info">
        <div className="test">
          <span className="product-item__name">{name}</span>
          <div className="product-item__info--text">
            <div className="product-item__info-spec">
              Width:
              <div className="product-item__info-spec--specification">
                {width}
              </div>
            </div>
            <div className="product-item__info-spec">
              Height:
              <div className="product-item__info-spec--specification">
                {height}
              </div>
            </div>
            <div className="product-item__info-spec">
              <div className="product-item__info-spec--specification">
                {description}
              </div>
            </div>
            <div className="product-item__info-spec">
              Price:
              <div className="product-item__info-spec--specification">
                {price} Eur
              </div>
            </div>
          </div>
        </div>
        <img
          className="product-item__img"
          onMouseEnter={checking}
          src={findImg}
          alt="Product Item"
          id={check}
        />
      </div>
      <span className="product-item__cart mark" onClick={addItem}>
        add to cart
      </span>
    </div>
  )
}
export default ProductItem
