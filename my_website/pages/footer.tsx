import { useEffect, useState } from "react";
import Link from 'next/link';
import {BiUser,BiShoppingBag} from "react-icons/bi";
import Image from "next/image";
import { fetchUser } from '../user/userService';

export default function Footer(){

    return  <footer>
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
   }
  
  
   
  
  
  
  