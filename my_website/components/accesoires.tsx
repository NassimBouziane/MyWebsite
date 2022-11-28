import { useEffect, useState } from 'react'
import { fetchProduct } from '../product/productService'
import Image from 'next/image'
import { createOrder } from '../OrderProduct/OrderProductService'
import { getCookie, setCookie } from 'typescript-cookie'
import { fetchUser } from '../user/userService'

export default function accesoires() {
  const [data, setData] = useState(null)
  
  function test() {
    console.log('test')
  }
  useEffect(() => {
    fetchProduct().then((response) => {
      setData(response.data)
    })
    fetchUser(getCookie('username')).then((response) => {
      setCookie('Id', response.data.id)
    })
    
  }, [])
  return (
    <div className="cards">
      {data &&
        data.map((product, i) => {
          const src = `/${product.productName}.png`
          if (product.isAccessory === 1) {
            return (
              <div>
                <div className="card">
                  <Image src={src} alt="Accessoires vendu par Greento" width={800} height={800} />
                  <h2 className="card-title">{product.productName}</h2>
                  <p onClick={test} className="card-desc">
                    {product.productPrice} €
                  </p>
                </div>
              </div>
            )
          }
        })}
    </div>
  )
}
