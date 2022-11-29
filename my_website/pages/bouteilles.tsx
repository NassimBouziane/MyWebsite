import NavBar from './header'
import Footer from './footer'
import { useEffect } from 'react'
import Bouteilles from '../components/bouteille'

export default function bouteilles() {
  useEffect(() => {
    document.title = 'Bouteilles'
  }, [])
  return (
    <div>
      <NavBar />      
      <Bouteilles/>
    </div>
  )
}
