import Image from 'next/image'
import { useEffect, useState } from 'react'
import { fetchProductId } from '../product/productService';

export default function productPageTest() {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetchProductId(9).then((response) => {
      setData(response.data)
    })
  }, [])

  return (
    <div>
      <div className="card-wrapper">
        <div className="cardProduct">
          <div className="product-imgs">
            <div className="img-display">
              <Image
              src="/salut.jpg"alt="Grento Logo with sticks and point and circle" width={500}height={500}
              />
            </div>
          </div>
          <div className="product-content">
            <h2 className="product-title">Bento</h2>
            <div className="product-price">
              <p className="price">Prix: {data && data.productPrice }€</p>
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
              <input type="number" min="1" step={1}  value="1" max="99"/>
              <button type="button" className="btn" >
              Add to Cart</button> <i className="fas fa-shopping-cart"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
