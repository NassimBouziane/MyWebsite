import { useEffect, useState } from 'react'
import { fetchProduct } from '../product/productService'
import Image from 'next/image'

export default function product() {
  const [data, setData] = useState(null)
  function test() {
    console.log('test')
  }
  useEffect(() => {
    fetchProduct().then((response) => {
      setData(response.data)
    })
  }, [])
  return (
    <div className="cards">
      {data &&
        data.map((product, i) => {
          const src = `/${product.productName}.png`
          if (product.isBottle === 0 && product.isAccessory === 0) {
            return (
              <div>
                <div className="card">
                  <Image src={src} alt="Produit de greento" width={800} height={800} />
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
