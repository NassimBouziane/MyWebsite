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
      setAdmin(
        <section className="page_404">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 ">
                <div className="col-sm-10 col-sm-offset-1  text-center">
                  <div className="four_zero_four_bg">
                    <h1 className="text-center ">404</h1>
                  </div>

                  <div className="contant_box_404">
                    <h3 className="h2">Look like you're lost</h3>

                    <p>the page you are looking for not avaible!</p>

                    <a href="" className="link_404">
                      Go to Home
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }, [])

  return (
    <div>
      <NavBar />
      <div>{admin}</div>
      <Footer />
    </div>
  )
}
