import { api } from '../services/servicesHelper'

export const fetchProduct = async () => {
  return await api.get('/product/')
}
