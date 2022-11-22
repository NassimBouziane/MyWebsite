import NavBar from './header'
import Footer from './footer'
import { useEffect } from 'react'
export default function bouteilles() {
  useEffect(() => {
    document.title = 'Bouteilles'
  }, [])
  return (
    <div>
      <NavBar />
      <Footer />
    </div>
  )
}
