import Link from 'next/link'
import { BiUser, BiShoppingBag } from 'react-icons/bi'
import Image from 'next/image'
import IoEyeSharp from 'react-icons/io'
import { useState, useEffect } from 'react'
import { getCookie } from 'typescript-cookie'
import Test from './compte/test'
import { createOrder } from '../OrderProduct/OrderProductService'

const today = new Date()
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

export default function NavBar() {
  const [connected, setConnected] = useState(<></>)
  useEffect(() => {
    if (getCookie('Authorization') === undefined) {
      setConnected(<Test></Test>)
    } else if (getCookie('Authorization') !== undefined) {
      setConnected(
        <Link href="/compte/moi">
          {' '}
          <BiUser />
        </Link>
      )
      createOrder(date, getCookie('Id'))
    }
  }, [])

  return (
    <div id="body">
      <header>
        <Link href="http://localhost:3001">
          <Image
            className="logo"
            src="/Greento.png"
            alt="Grento Logo with sticks and point and circle"
            width={100}
            height={100}
          />
        </Link>

        <div id="test">
          <ul className="menu">
            <li className="liste">
              <Link href="bento">Bentos</Link>
            </li>
            <li className="liste">
              <Link href="bouteilles">Bouteilles</Link>
            </li>
            <li className="liste">
              <Link href="couvert">Couverts & Accessoires</Link>
            </li>
            <li className="liste">
              <Link href="APropos">A propos</Link>
            </li>
            <li className="liste"> {connected}</li>
            <li className="liste">
              <Link href="panier">
                <BiShoppingBag />
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}
