import api from './apiconfig'

export const getGreatThings = async (user_id) => {
  const response = await api.get(`users/${user_id}/great_things`)
  return response.data
}

export const postGreatThings = async (user_id, greatThingsData) => {
  const response = await api.post(`users/${user_id}/great_things`, { content: greatThingsData.content, date: greatThingsData.date, user_id: user_id })
  return response.data
}

export const putGreatThings = async (user_id, id, greatThingsData) => {
  const response = await api.put(`users/${user_id}/great_things/${id}`, { greatThing: greatThingsData })
  return response.data
}