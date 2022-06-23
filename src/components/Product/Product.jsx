import React, { useEffect } from 'react'
import Aos from 'aos'
import { useParams } from 'react-router-dom'
import ProductItem from './ProductItem'
import { useOutletContext } from 'react-router'
import img from '../../constants/carousel'
import './Product.scss'

function Product() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  useEffect(() => {
    setMenu('HOME')
  }, [])

  useEffect(() => {
    setLink('/home')
  }, [])

  const { obj } = useOutletContext()
  console.log(obj.setArr)
  const array = obj.arr
  const setArray = obj.setArr
  const setMenu = obj.setMenu
  const setLink = obj.setLink

  const { id } = useParams()

  const findImg = img.find((image) => image.id === parseInt(id))
  console.log(findImg.id)

  return (
    <div className="product" data-aos="fade-bottom">
      <ProductItem
        img={findImg}
        arr={array}
        setArr={setArray}
        findId={findImg.id}
        findImg={findImg.img}
        name={findImg.name}
        price={findImg.price}
        description={findImg.description}
        width={findImg.width}
        height={findImg.height}
      />
    </div>
  )
}

export default Product
