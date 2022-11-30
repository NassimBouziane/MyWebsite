import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { getCookie } from 'typescript-cookie'
import { fetchProductById } from '../product/productService'
import { createOrderProduct } from '../OrderProduct/OrderProductService'
import { Modal } from '@mui/material'
import Box from '@mui/material/Box'
import Test from '../pages/compte/test'

export default function productPageTest() {
  const [value, setValue] = useState(1)
  const [data, setData] = useState(null)
  const [src, setSrc] = useState('')
  const quantity = useRef(null)
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  const [connected, setConnected] = useState(<></>)

  const today = new Date()
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  function test() {
    if (getCookie('Authorization') !== undefined) {
      createOrderProduct(date, quantity.current.value, getCookie('productId'), getCookie('OrderId'))
      setConnected(<p> Produit ajouté au panier ✅</p>)
    } else {
      setConnected(<Test />)
    }
  }

  useEffect(() => {
    fetchProductById(getCookie('productId')).then((response) => {
      setData(response.data)
      if (response.data !== null) {
        setSrc(`/${response.data.productName}.png`)
      }
    })
    // A FAIRE : FETCH CATEGORY BY ID
  }, [])
  return (
    <div>
      <div className="card-wrapper">
        <div className="cardProduct">
          <div className="product-imgs">
            <div className="img-display">
              <Image src={src} alt="Grento Logo with sticks and point and circle" width={500} height={500} />
            </div>
          </div>
          <div className="product-content">
            <h2 className="product-title">{data && data.productName}</h2>
            <div className="product-price">
              <p className="price">Prix: {data && data.productPrice}€</p>
            </div>
            <div className="product-detail">
              <h2>A propos de ce produit: </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur
                placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos,
                labore suscipit. Unde.
              </p>
              <ul>
                <li>
                  Categorie: <span>{data && data.CategoryId}</span>
                </li>
              </ul>
            </div>
            <div className="purchase-info">
              <input ref={quantity} type="number" min="1" step={1} value={value} onChange={handleChange} max="99" />
              <button onClick={test} type="button" className="btn">
                {connected} Ajouter au panier
              </button>{' '}
              <i className="fas fa-shopping-cart"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
