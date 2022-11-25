import { api } from '../services/servicesHelper'

import { Cookies, useCookies } from 'react-cookie'
import { useState } from 'react'
import { getCookie, setCookie } from 'typescript-cookie'
const Data2 = {
  username: 'test12H00',
  password: 'passwordeazeatest'
}
const Data1 = {
  username: 'joshu1ds',
  password: 'jeuispasmdp7ds5.'
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
export const modifyUsers = async (
  firstName: any,
  lastName: any,
  username: any,
  email: any,
  phoneNumber: any,
  password: any
) => {
  fetchUser(Data1.username).then((response) => {
    setCookie('Id', response.data.id)
  })

  return await api
    .put(
      '/user',
      {
        id: getCookie('Id'),
        firstName,
        lastName,
        username,
        password,
        email,
        phoneNumber
      },
      {
        headers: {
          Authorization: getCookie('Authorization')
        }
      }
    )
    .then((response) => {
      console.log('test2', response)
    })
}
