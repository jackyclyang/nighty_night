import api from './apiconfig'

export const getGreatThings = async (user_id) => {
  const response = await api.get(`users/${user_id}/great_things`)
  return response.data
}