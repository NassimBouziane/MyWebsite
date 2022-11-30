import NavBar from './header'
import Footer from './footer'
import { useEffect, useState } from 'react'
import { getCookie } from 'typescript-cookie'

export default function admin() {
  const [admin, setAdmin] = useState(<></>)
  useEffect(() => {
    document.title = 'ADMIN'
    if (getCookie('username') !== undefined && getCookie('username') === 'devadmin') {
      setAdmin(<p> VOUS ETES L'ADMIN </p>) 
      // DIRE A JORDAN QUE j'ai fais le truc avec storage session et que il faut supprimer les produits a partir du bas pour ne pas avoir de probleme
      // AJOUTER FORMULAIRE POUR AJOUTER PRODUCT (dans API ajouter description)
      // Delete product
      // Ajouter formulaire pour ajouter categories et DELETE
    } else {
      setAdmin(<p> test </p>)
    }
  }, [])

  return (
    <div>
      <NavBar />
      <p>{admin}</p>
      <Footer />
    </div>
  )
}
