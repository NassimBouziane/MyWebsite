import { api } from '../services/servicesHelper'

export const fetchProduct = async () => {
  return await api.get('/categories/')
}
export const fetchCategoriesById = async (id: number) => {
  return await api.get('/categories/' + id).then((response) => {
    return response
  })
}
