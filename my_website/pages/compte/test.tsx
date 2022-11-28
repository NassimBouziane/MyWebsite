import { login, register, deletebyId, fetchUser } from '../../user/userService'
import React, { useState, useEffect, useRef } from 'react'

import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { BiUser } from 'react-icons/bi'

export default function test() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  function deletebyIdtest() {
    deletebyId(6)
  }

  const [data, setData] = useState(null)
  useEffect(() => {
    fetchUser(9).then((response) => {
      setData(response.data)
    })
  }, [])
  const firstName = useRef(null)
  const lastName = useRef(null)
  const username = useRef(null)
  const usernameLogin = useRef(null)
  const email = useRef(null)
  const phoneNumber = useRef(null)
  const password = useRef(null)
  const passwordLogin = useRef(null)
  function registerusers() {
    register(
      firstName.current.value,
      lastName.current.value,
      username.current.value,
      password.current.value,
      email.current.value,
      phoneNumber.current.value
    )
  }
  function loginuser() {
    login(usernameLogin.current.value, passwordLogin.current.value)
  }

  return (
    <div>
      <BiUser onClick={handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ width: 600, bgcolor: 'background.paper', top: '20%', left: '30%' }} className="popup">
          <form onSubmit={registerusers} id="testpopup">
            <label>
              prenom <input ref={firstName} className="inputAccount" id="formInput" type="text" />
            </label>
            <label>
              nom <input ref={lastName} className="inputAccount" id="formInput" type="text" />
            </label>
            <label>
              Nom d'utilisateur <input ref={username} className="inputAccount" id="formInput" type="text" />
            </label>
            <label>
              Mot de passe <input ref={password} className="inputAccount" id="formInput" type="password" />
            </label>
            <label>
              Email <input ref={email} className="inputAccount" id="formInput" type="email" />
            </label>
            <label>
              Numero de telephone <input ref={phoneNumber} className="inputAccount" id="formInput" type="tel" />
            </label>
            <button type="submit">S'inscrire</button>
          </form>

          <form onSubmit={loginuser} id="testpopup">
            <label>
              Nom d'utilisateur <input ref={usernameLogin} className="inputAccount" id="formInput" type="text" />
            </label>
            <label>
              Mot de passe <input ref={passwordLogin} className="inputAccount" id="formInput" type="password" />
            </label>
            <button type="submit">Se connecter</button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}
