import { api } from '../services/servicesHelper'

import { Cookies, useCookies } from 'react-cookie'
import { useState } from 'react'
import { getCookie, setCookie } from 'typescript-cookie'

export const fetchUser = async (id: any) => {
  return await api.get('/user/' + id)
}

export const register = async (
  firstName: any,
  lastName: any,
  username: any,
  password: any,
  email: any,
  phoneNumber: any
) => {
  return await api.post('/user/register/', {
    firstName,
    lastName,
    username,
    password,
    email,
    phoneNumber
  })
}

export const login = async (username, password) => {
  // console.log(Data1.username)
  return await api
    .post('/user/login/', {
      username,
      password
    })
    .then((response) => {
      setCookie('username', username)
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
  console.log(firstName, lastName, username, email, phoneNumber, password)  
  fetchUser(getCookie('username')).then((response) => {
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
        email,
        password,
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
      setCookie('username', username)
    })
}
