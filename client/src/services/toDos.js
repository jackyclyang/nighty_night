import api from './apiconfig'

export const getToDos = async (user_id) => {
  const response = await api.get(`users/${user_id}/to_dos`)
  return response.data
}

export const postToDo = async (user_id, toDoData) => {
  const response = await api.post(`users/${user_id}/to_dos`, { content: toDoData.content, status: toDoData.status, user_id: user_id })
  return response.data
}