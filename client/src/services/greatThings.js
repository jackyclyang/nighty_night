import api from './apiconfig'

export const getGreatThings = async (user_id) => {
  const response = await api.get(`users/${user_id}/great_things`)
  return response.data
}

export const postGreatThings = async (user_id, greatThingsData) => {
  const response = await api.post(`users/${user_id}/great_things`, { greatThing: greatThingsData })
  return response.data
}