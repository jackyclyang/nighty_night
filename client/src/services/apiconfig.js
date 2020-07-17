import axios from 'axios'

// let apiUrl

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://nighty-night-api.herokuapp.com/' : 'http://localhost:3000'

// const apiUrls = {
//   production: 'https://nighty-night-api.herokuapp.com/',
//   development: 'http://localhost:3000/'
// }

// if (window.location.hostname === 'localhost') {
//   apiUrl = apiUrls.development
// } else {
//   apiUrl = apiUrls.production
// }

const api = axios.create({
  baseURL: baseUrl
})

export default api