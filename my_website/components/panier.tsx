/* eslint-disable no-lone-blocks */
import Image from 'next/image'
import Footer from '../pages/footer'
import React, { useEffect, useState } from 'react'
import { fetchOrderProducts } from '../OrderProduct/OrderProductService'
import { getCookie, setCookie } from 'typescript-cookie'
import { fetchProduct, fetchProductById } from '../product/productService'
import {TiDeleteOutline} from 'react-icons/ti'

// A FAIRE CRéATION DE ORDERPRODCT EN FONCTION DE ORDER ID DANS LE COOKIE QUAND LE CLIENT CHOISIT DE RAJOUTER UN PRODUIT DANS SON PANIER :)
// dire a jordan de designer la page panier
// ajouter un bouton effacé le produit dans le panier
export default function panier() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetchOrderProducts().then((response) => {
      setData(response.data)
    })
  }, [])

  interface product {
    name: String
    price: number
  }
  return (
    <div>
      {data &&
        data.map((product, i) => {
          if (product.OrderId.toString() === getCookie('OrderId')) {
            fetchProductById(product.productId).then((response: any) => {
              if (response.data !== null) {
                const product: product = {
                  name: response.data.productName,
                  price: response.data.productPrice
                }
                setCookie(`basketData${i}`, JSON.stringify(product))
              }
            })
            if (getCookie(`basketData${i}`) !== undefined) {
              const productData: product = JSON.parse(getCookie(`basketData${i}`))
              const src = `/${productData.name}.png`
              return (
                <div className="courses-container">
                  <div className="course">
                    <div className="course-preview">
                      <Image
                        src={src}
                        alt="Les produits de greento que vous avez choisis dans votre panier"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="course-info">
                      <div className="progress-container">
                        <div className="progress"></div>
                        <TiDeleteOutline className='deleteProduct'/>
                      </div>
                      <h2>{productData && productData.name}</h2>
                      <p>{productData && productData.price}</p>
                      <p>quantité: {product.quantity} </p>

                    </div>
<<<<<<< HEAD
                  </div>
=======
                  </div> 
                                       
>>>>>>> b9861d081f6f9448f8340f9bbc477aaedbe9f755
                </div>
              )
            }
          }
        })}
      <div>
        <div className="boxSummary">
          <div className="summary">
            <div className="summary-total-items">
              <span className="total-items"></span>Vos produits
            </div>
            <div className="summary-subtotal">
              <div className="subtotal-title">Prix Total</div>
              <div className="subtotal-value final-value" id="basket-subtotal">
                130.00
              </div>
            </div>
          </div>
          <div className="summary-delivery">
            <select name="delivery-collection" className="summary-delivery-selection">
              <option value="0">Choisissez votre Option de Livraison</option>
              <option value="collection">Option</option>
              <option value="first-className">Point relais</option>
              <option value="second-className">Livraison a domicile</option>
              <option value="signed-for">Livraison a L'Etna</option>
            </select>
          </div>
          <div className="summary-total">
            <div className="total-title">Total</div>
            <div className="total-value final-value" id="basket-total"></div>
          </div>
          <div className="summary-checkout">
            <button className="checkout-cta">Passez au payement</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
