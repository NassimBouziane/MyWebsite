import { api } from '../services/servicesHelper'

import { Cookies, useCookies } from 'react-cookie'
import { useState } from 'react'
import { getCookie, setCookie } from 'typescript-cookie'

const Data2 = {
  username: 'test12H00',
  password: 'passwordeazeatest'
}
const Data1 = {
  username: 'TESTOazezazeazezaaeza',
  password: 'passwordeazeatest'
}

export const fetchUser = async (id: string | number) => {
  return await api.get('/user/' + id)
}

export const register = async () => {
  return await api.post('/user/register/', {
    username: Data2.username,
    password: Data2.password
  })
}

export const login = async () => {
  // console.log(Data1.username)
  return await api
    .post('/user/login/', {
      username: Data1.username,
      password: Data1.password
    })
    .then((response) => {
      setCookie('Authorization', response.data)
    })
}
export const deletebyId = async (id2: number) => {
  return await api
    .delete('/user/' + id2, {
      headers: {
        Authorization: getCookie('Authorization')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}
