import { api } from '../services/servicesHelper'

export const fetchProduct = async () => {
  return await api.get('/product/')
}

export const fetchProductId = async (id:any) => {
  return await api.get('/product/'+id)
}

