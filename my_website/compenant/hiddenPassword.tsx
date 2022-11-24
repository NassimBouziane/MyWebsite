import * as React from 'react';
import { fetchUser } from '../user/userService';
import { useState,useEffect } from 'react';

const [data, setData] = useState(null)
useEffect(() => {
 fetchUser(77).then((response) => {
      setData(response.data)
})
}, [])
const [showPassword,setShowPassword] = useState ("")
let [censoredPassword, setCensoredPassword] = useState("")
let hiddenPassword=""
export function compte(){
if (data !== null){
for(let i=0;data.password.length > i; i+=1){
  hiddenPassword = hiddenPassword + "*"
}
setCensoredPassword(hiddenPassword)
}}
let Bool = false
export function handleclick(){
  if (data !== null && Bool === false){
    setCensoredPassword(data.password);
    Bool = true
    console.log("im true")
  }
  else{
    compte()
    setCensoredPassword(hiddenPassword)
    console.log("je suis faux")
  }
}