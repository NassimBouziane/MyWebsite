/* eslint-disable no-lone-blocks */
import Image from 'next/image'
import Footer from '../pages/footer'
import React, { useEffect, useState } from 'react'
import { fetchOrderProducts } from '../OrderProduct/OrderProductService'
import { getCookie, setCookie } from 'typescript-cookie'
import { fetchProduct, fetchProductById } from '../product/productService'

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
                      </div>
                      <h2>{productData && productData.name}</h2>
                      <p>{productData && productData.price}</p>
                      <p>quantité: {product.quantity} </p>
                    </div>
                  </div>
                </div>
              )
              // fetchProductById(product.productId).then((response: any) => setData1(response))
            }
          }
        })}
      <Footer />
    </div>
  )
}

// a faire : get les produits en fonction de product id

// créer une fonction UNE SEULE FOIS qui créer orderproducts quand il fait ajouter le produit

// {
//   data1 &&
//     data1.map((product1, j) => {
//       console.log(product1.id)
//       console.log(data && data.productId)
//       if (data && product1.id === data.productId) {
//         setTest1(product1.productName)
//         console.log(test1)
//       }
//     })
// }
