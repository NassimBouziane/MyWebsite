import Image from 'next/image'
import Footer from '../pages/footer'
import { useEffect, useState } from 'react'
import { fetchOrderProducts } from '../OrderProduct/OrderProductService'
import { getCookie, setCookie } from 'typescript-cookie'
import { fetchProductById } from '../product/productService'
import { Console } from 'console'

export default function panier() {
  const [data, setData] = useState(null)
  const [data1, setData1] = useState(null)

  function test() {}

  useEffect(() => {
    fetchOrderProducts().then((response) => {
      setData(response.data)
    })
  }, [])
  return (
    <div>
      {data &&
        data.map((product, i) => {
          if (product.OrderId.toString() === getCookie('OrderId')) {
            // fetchProductById(product.productId).then((response: any) => setData1(response))
            const test = fetchProductById(product.productId)
            console.log(
              test.then((response) => {
                setCookie('TEST', response.data.productName);
                
              })
            )
            const src = `/TESTE.png`

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
                    <h2>{data1 && data1.productName}</h2>
                    <p>{data1 && data1.productPrice}</p>
                    <p>quantité: {product.quantity} </p>
                  </div>
                </div>
              </div>
            )
          }
          return <p> TESTT</p>
        })}
      <Footer />
    </div>
  )
}

// a faire : get les produits en fonction de product id

// créer une fonction UNE SEULE FOIS qui créer orderproducts quand il fait ajouter le produit
