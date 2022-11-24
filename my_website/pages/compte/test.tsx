import { login, register, deletebyId } from '../../user/userService'
import React, { useState, useEffect } from 'react'

import { Cookies, useCookies } from 'react-cookie'

export default function test() {
  function deletebyIdtest() {
    deletebyId(6)
  }

  return (
    <>
      <button onClick={register}> REGISTER</button>
      <button onClick={login}> LOGIN</button>
      <button onClick={deletebyIdtest}> delete</button>
    </>
  )
}
