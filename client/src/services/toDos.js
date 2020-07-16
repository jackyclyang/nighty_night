import api from './apiconfig'

export const getToDos = async (user_id) => {
  const response = await api.get(`users/${user_id}/to_dos`)
  return response.data
}