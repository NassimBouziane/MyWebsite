import { useEffect, useState } from "react";
import Link from 'next/link';
import {BiUser,BiShoppingBag} from "react-icons/bi";
import Image from "next/image";
import { fetchUser } from '../user/userService';

export default function NavBar() {
  //state(etat,données)
  const [data,setData]= useState(null);
  //comportement
    //1-copie state

    //2-manipulation
  useEffect(() =>{
 fetchUser().then((response) => {
  setData(response.data);
  
});

  }, []);
  //affichage (render)
  
  return <div id="body">
    <header>
      <Link href="http://localhost:3001"><Image className="logo"
        src="/../public/Greento.png"
        alt="Grento Logo with sticks and point and circle"
        width={100}
        height={100}
      
      /></Link>
    
      <div id="test">
        <ul className="menu">
          <li className="liste"><Link href="bento">Bentos</Link></li>
          <li className="liste"><Link href="bouteilles">Bouteilles</Link></li>
          <li className="liste"><Link href="couvert">Couverts & Accessoires</Link></li>
          <li className="liste"><Link href="APropos">A propos</Link></li>
          <li className="liste"><Link href="/compte/moi"><BiUser/></Link></li>
          <li className="liste"><Link href="panier"><BiShoppingBag/></Link></li>
        </ul>        
      </div>
    </header>
      {data && data.map((user)=>{
      return(
        <div key={user.id}>
          <p>{user.username+ " "+user.password}</p>
        </div>
      )})}
    
  </div>
}


 



