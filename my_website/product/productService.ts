import { api } from '../services/servicesHelper'

export const fetchProduct = async () => {
  return await api.get('/product/')
}
export const fetchProductById = async (id: number) => {
  return await api.get('/product/' + id).then((response) => {
    return response
  })
}
