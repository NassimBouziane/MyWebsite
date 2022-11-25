import { login, register, deletebyId } from '../../user/userService';
import React, { useState, useEffect, useRef } from 'react'
import { fetchUser } from '../../user/userService'
import { Cookies, useCookies } from 'react-cookie'
import NavBar from '../header';
import Popup from 'reactjs-popup'

export default function test() {
  function deletebyIdtest() {
    deletebyId(6)
  }
  
const [data, setData] = useState(null)
useEffect(() => {
 fetchUser(9).then((response) => {
      setData(response.data)
})
}, [])
const firstName =useRef(null)
const lastName = useRef(null)
const username = useRef(null)
const email = useRef(null)
const phoneNumber = useRef(null)
const password = useRef(null)
function registerusers() {
  register(firstName.current.value,lastName.current.value,username.current.value, email.current.value, phoneNumber.current.value, password.current.value)

}




  return <div>
    <NavBar/>
    <Popup trigger={<button>test</button>} modal >
       <div className='modal'>
         <div className='content'>
           <form onSubmit={registerusers}>
             <label>prenom <input ref={firstName} className='inputAccount' id='formInput' type="text" /></label>
             <label>nom <input ref={lastName} className='inputAccount' id='formInput' type="text" /></label>
             <label>Nom d'utilisateur <input ref={username} className='inputAccount' id='formInput' type="text" /></label>
             <label>Mot de passe <input ref={password} className='inputAccount' id='formInput' type="password" /></label>
             <label>Email <input ref={email} className='inputAccount' id='formInput' type="email" /></label>
             <label>Numero de telephone <input ref={phoneNumber} className='inputAccount' id='formInput' type="tel" /></label>
             <button type='submit'>wsh les khey</button>
           </form>
         </div>
       </div>
    </Popup>
  </div>
  
}


