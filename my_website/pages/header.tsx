import Link from 'next/link'
import { BiUser, BiShoppingBag } from 'react-icons/bi'
import Image from 'next/image'
import IoEyeSharp from 'react-icons/io'
import { useState, useEffect } from 'react'
import { getCookie } from 'typescript-cookie'
import Test from './compte/test'

export default function NavBar() {
  const [connected, setConnected] = useState(<></>)
  useEffect(() => {
    if (getCookie('Authorization') === undefined) {
      setConnected(<Test></Test>)
    } else if (getCookie('Authorization') !== undefined) {
      setConnected(
        <Link
          href="/compte/moi"
          onClick={() => {
            window.location.href = '/compte/moi'
          }}
        >
          {' '}
          <BiUser />
        </Link>
      )
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
            onClick={() => {
              window.location.href = 'http://localhost:3001'
            }}
          />
        </Link>

        <div id="test">
          <ul className="menu">
            <li className="liste">
              <Link
                href="bento"
                onClick={() => {
                  window.location.href = 'bento'
                }}
              >
                Bentos
              </Link>
            </li>
            <li className="liste">
              <Link
                href="bouteilles"
                onClick={() => {
                  window.location.href = 'bouteilles'
                }}
              >
                Bouteilles
              </Link>
            </li>
            <li className="liste">
              <Link
                href="couvert"
                onClick={() => {
                  window.location.href = 'couvert'
                }}
              >
                Couverts & Accessoires
              </Link>
            </li>
            <li className="liste">
              <Link
                href="APropos"
                onClick={() => {
                  window.location.href = 'APropos'
                }}
              >
                A propos
              </Link>
            </li>
            <li className="liste">
              {/* <Link href="/compte/moi">
                <BiUser />
              </Link> */}{' '}
              {connected}
            </li>
            <li className="liste">
              <Link
                href="panier"
                onClick={() => {
                  window.location.href = 'panier'
                }}
              >
                <BiShoppingBag />
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}
