import { api } from '../services/servicesHelper'

export const fetchUser = async (id) => {
  return await api.get('/user/'+id)
}

