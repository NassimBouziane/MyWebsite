import { api } from '../services/servicesHelper'

export const fetchUser = async () => {
  return await api.get('/user/')
}

