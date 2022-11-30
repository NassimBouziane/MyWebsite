/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react'
import { fetchProduct } from '../product/productService'
import Image from 'next/image'
import Footer from '../../my_website/pages/footer'
import Link from 'next/link'
import { getCookie, setCookie } from 'typescript-cookie'

export default function product() {
  const [data, setData] = useState(null)
  const handleClick = (event, param) => {
    setCookie('productId', param)
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
                  <Link href="../productPage" className="card-desc" onClick={(event) => handleClick(event, product.id)}>
                    {product.productPrice} €
                  </Link>
                </div>
              </div>
            )
          }
        })}
      <Footer />
    </div>
  )
}
