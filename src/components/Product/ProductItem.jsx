import React from 'react'
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
  const addItem = () => {
    setArr((item) => [...item, img])
  }

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
            <p className="product-item__info-spec">
              <div className="product-item__info-spec--specification">
                {description}
              </div>
            </p>
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
