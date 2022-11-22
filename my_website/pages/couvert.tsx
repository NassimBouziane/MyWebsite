import NavBar from './header'
import Footer from './footer'
import { useEffect } from 'react'

export default function couvert() {
  useEffect(() => {
    document.title = 'Couvert & Accessoires'
  }, [])
  return (
    <div>
      <NavBar />
      <Footer />
    </div>
  )
}
