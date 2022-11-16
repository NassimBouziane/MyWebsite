import { useState } from "react";
import Link from 'next/link';
import {BiUser,BiShoppingBag} from "react-icons/bi";
import Image from "next/image";

export default function Index() {
  //state(etat,données)
  
  //comportement
    //1-copie state

    //2-manipulation

    //-3 modification
  
  //affichage (render)
  return <div id="body">
    <header>
      <Image className="logo"
        src="/../public/Greento.png"
        alt="Grento Logo with sticks and point and circle"
        width={100}
        height={100}
      />
    
      <div id="test">
        <ul className="menu">
          <li className="liste"><Link href="bento">Bentos</Link></li>
          <li className="liste"><Link href="bouteilles">Bouteilles</Link></li>
          <li className="liste"><Link href="couvert">Couverts & Accessoires</Link></li>
          <li className="liste"><Link href="APropos">A propos</Link></li>
          <li className="liste"><BiUser/></li>
          <li className="liste"><BiShoppingBag/></li>
        </ul>
        
      </div>
    </header>
    <footer>
      <div className="footer">
        <div className="footer-link-title">
          <Link href="">Nous contactez</Link>
          <Link href=""><br />FAQ</Link>
        </div>
        <div className="footer-title">
          <p>A propos</p>
        </div>
        <div className="footer-title">
          <p>Nos produits</p>
        </div>
      </div>
        <div id="footer-link">
          <Link className="footer-link" href="">Conditions générales de vente</Link>
          <Link className="footer-link" href="">Mentions légales</Link>
          <Link className="footer-link" href="">Politique de protection des données</Link>
        </div>
      
      
    </footer>
  </div>
}




