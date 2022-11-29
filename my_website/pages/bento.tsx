import NavBar from './header'
import Footer from './footer'
import Product from '../components/product'

import { useEffect } from 'react'
export default function bento() {
  useEffect(() => {
    document.title = 'Bentos'
  }, [])
  return (
    <div>
      <NavBar />
      <Product />
  </div>
  )
}