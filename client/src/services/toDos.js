import api from './apiconfig'

export const getAllToDos = async (user_id) => {
  const response = await api.get(`users/${user_id}/to_dos`)
  return response.data
}

export const postToDo = async (user_id, toDoData) => {
  const response = await api.post(`users/${user_id}/to_dos`, { to_do: toDoData })
  return response.data
}

export const putToDo = async (user_id, id, toDoData) => {
  const response = await api.put(`users/${user_id}/to_dos/${id}`, { id: id, content: toDoData.content, status: toDoData.status, user_id: user_id })
  return response.data
}

export const deleteToDo = async (user_id, id) => {
  const response = await api.delete(`users/${user_id}/to_dos/${id}`)
  return response.data
}