import NavBar from './header'
import Footer from './footer'
import { useEffect } from 'react'
export default function APropos() {
  useEffect(() => {
    document.title = 'A Propos'
  }, [])
  return (
    <div>
      <NavBar />
      <Footer />
    </div>
  )
}
