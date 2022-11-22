import NavBar from './header'
import Footer from './footer'
import { useEffect } from 'react'

export default function home() {
  useEffect(() => {
    document.title = 'Greento'
  }, [])
  return (
    <div>
      <NavBar />
      <Footer />
    </div>
  )
}
