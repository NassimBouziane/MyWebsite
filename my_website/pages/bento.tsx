import NavBar from './header'
import Footer from './footer'
import { useEffect } from 'react'
export default function bento() {
  useEffect(() => {
    document.title = 'Bentos'
  }, [])
  return (
    <div>
      <NavBar />
      <Footer />
    </div>
  )
}
