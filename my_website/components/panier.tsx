import Image from 'next/image'
import Footer from '../pages/footer'
import { useEffect, useState } from 'react'
import { fetchOrderProducts } from '../OrderProduct/OrderProductService'
import { getCookie } from 'typescript-cookie'

export default function panier() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetchOrderProducts().then((response) => {
      if (data && data.OrderId === getCookie('OrderId')) {
        setData(response.data)
        console.log(response.data)
        // a faire : get les produits en fonction de product id
        // créer une fonction UNE SEULE FOIS qui créer orderproducts quand il fait ajouter le produit
      }
    })
  }, [])
  return (
    <div>
      {data &&
        data.map((product, i) => {
          ;<div className="courses-container">
            <div className="course">
              <div className="course-preview">
                <Image src="/TESTE.png" alt="Grento Logo with sticks and point and circle" width={100} height={100} />
              </div>
              <div className="course-info">
                <div className="progress-container">
                  <div className="progress"></div>
                </div>
                <h2>name product</h2>
                <p>price</p>
                <p>quantité:</p>
              </div>
            </div>
          </div>
        })}

      <Footer />
    </div>
  )
}
