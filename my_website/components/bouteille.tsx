import { useEffect, useState } from 'react'
import { fetchProduct } from '../product/productService'
import Image from 'next/image'
import Footer from '../pages/footer'

export default function bouteilles() {
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
          if (product.isBottle === 1) {
            return (
              <div>
                <div className="card">
                  <Image src={src} alt="Gourdes de greento" width={800} height={800} />
                  <h2 className="card-title">{product.productName}</h2>
                  <p onClick={test} className="card-desc">
                    {product.productPrice} €
                  </p>
                </div>
              </div>
            )
          }
        })}        
        <Footer/>
    </div>
  )
}
