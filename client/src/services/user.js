import api from './apiconfig'

export const getUser = async (user_id) => {
  const response = await api.get(`users/${user_id}/`)
  return response.data
}